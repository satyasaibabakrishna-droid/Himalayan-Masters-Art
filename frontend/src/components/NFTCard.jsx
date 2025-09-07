import { useState } from "react";
import { useTransferNFT } from "../hooks/useQueries";
import { Principal } from "@dfinity/principal";
import { Send, Image as ImageIcon } from "lucide-react";
import { useToast } from "../contexts/ToastContext";

export function NFTCard({ nft }) {
    const [recipient, setRecipient] = useState("");
    const [imageError, setImageError] = useState(false);
    const { mutate: transferNFT, isPending: isTransferring } = useTransferNFT();
    const { addError } = useToast();

    // Helper function to get metadata value by key
    const getMetadataValue = (key) => {
        const entry = nft.metadata[0]?.find(([k]) => k === key);
        if (entry && entry[1] && "Text" in entry[1]) {
            return entry[1].Text;
        }
        return "";
    };

    const handleTransfer = () => {
        if (!recipient) return;

        try {
            const recipientPrincipal = Principal.fromText(recipient);
            transferNFT({
                tokenId: nft.tokenId,
                to: { owner: recipientPrincipal, subaccount: [] }, // Assuming no subaccount
            });
            setRecipient("");
        } catch (error) {
            console.error("Invalid principal:", error);
            addError("Invalid principal: " + (error?.message || error));
        }
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
            {/* Artwork Image */}
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                {!imageError ? (
                    <img
                        src={getMetadataValue("tokenUri")}
                        alt={getMetadataValue("name")}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-amber-500">
                        <ImageIcon className="w-12 h-12" />
                        <span className="text-sm">Artwork not available</span>
                    </div>
                )}
            </div>

            {/* Artwork Details */}
            <div className="p-3 sm:p-4 space-y-3">
                <div>
                    <h3 className="font-semibold text-base sm:text-lg truncate text-amber-900">
                        {getMetadataValue("name") || "Untitled Artwork"}
                    </h3>
                    <p className="text-amber-600 text-xs sm:text-sm">
                        by {getMetadataValue("artist") || "Himalayan Master Artist"}
                    </p>
                    <p className="text-amber-700 text-xs sm:text-sm mt-1 line-clamp-2">
                        {getMetadataValue("description") || "A beautiful piece from Himalayan Masters Art"}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                            {getMetadataValue("medium") || "Digital Art"}
                        </span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                            {getMetadataValue("year") || "2025"}
                        </span>
                    </div>
                </div>

                {/* Transfer Form */}
                <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-amber-800">
                        Gift to:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            placeholder="Enter recipient principal"
                            className="flex-1 px-3 py-2 text-xs sm:text-sm bg-white/80 border border-amber-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900 placeholder-amber-500"
                        />
                        <button
                            onClick={handleTransfer}
                            disabled={isTransferring || !recipient}
                            className="px-3 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 disabled:cursor-not-allowed rounded transition-colors flex items-center justify-center sm:w-auto w-full text-white"
                        >
                            {isTransferring ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            ) : (
                                <Send className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
