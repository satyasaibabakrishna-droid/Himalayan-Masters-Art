import { useState } from "react";
import { useCollectionOwner, useMintNFT } from "../hooks/useQueries";
import { useInternetIdentity } from "ic-use-internet-identity";
import { Principal } from "@dfinity/principal";
import { Palette } from "lucide-react";
import { useToast } from "../contexts/ToastContext";

export function MintNFT() {
    const { identity } = useInternetIdentity();
    const { data: collectionOwner, isLoading: isLoadingOwner } =
        useCollectionOwner();
    const { mutate: mintNFT, isPending: isMinting } = useMintNFT();
    const { addError } = useToast();

    const [recipient, setRecipient] = useState("");

    const isOwner =
        identity &&
        collectionOwner &&
        identity.getPrincipal().toString() === collectionOwner.toString();
    console.log("Collection Owner:", collectionOwner?.toString());

    if (isLoadingOwner) {
        return (
            <div className="flex items-center gap-2 text-amber-600 text-sm">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-500"></div>
                Loading gallery owner...
            </div>
        );
    }

    if (!collectionOwner) {
        return (
            <div className="text-amber-600 text-sm sm:text-base">
                Gallery must be established before creating artworks.
            </div>
        );
    }

    if (!isOwner) {
        return (
            <div className="text-amber-600 text-sm sm:text-base">
                Only the gallery owner can create artworks.
            </div>
        );
    }

    const handleMint = () => {
        if (!recipient) return;

        try {
            const recipientPrincipal = Principal.fromText(recipient);
            mintNFT({
                to: { owner: recipientPrincipal, subaccount: [] }, // Assuming no subaccount
            });

            // Reset form
            setRecipient("");
        } catch (error) {
            console.error("Invalid principal:", error);
            addError("Invalid principal: " + (error?.message || error));
        }
    };

    return (
        <div className="space-y-4">
            <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-amber-800 mb-2">
                    Artwork Recipient
                </label>
                <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Enter recipient principal"
                    className="w-full px-3 py-2 text-sm bg-white/80 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900 placeholder-amber-500"
                />
            </div>

            <button
                onClick={handleMint}
                disabled={isMinting || !recipient}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 disabled:cursor-not-allowed rounded-lg transition-colors text-sm w-full sm:w-auto text-white"
            >
                {isMinting ? (
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Creating...
                    </>
                ) : (
                    <>
                        <Palette className="w-4 h-4" />
                        Create Artwork
                    </>
                )}
            </button>
        </div>
    );
}
