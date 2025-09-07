import { useInternetIdentity } from "ic-use-internet-identity";
import { CollectionClaim } from "./components/CollectionClaim";
import { MintNFT } from "./components/MintNFT";
import { OwnedNFTs } from "./components/OwnedNFTs";
import { AuthButton } from "./components/AuthButton";
import { Mountain, Palette, Heart } from "lucide-react";

function App() {
    const { identity, isInitializing } = useInternetIdentity();

    if (isInitializing) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                    <p className="text-amber-800 font-medium">Loading Himalayan Masters Art...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-amber-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Mountain className="w-8 h-8 text-amber-600" />
                            <Palette className="w-6 h-6 text-orange-500" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent text-center sm:text-left">
                            Himalayan Masters Art
                        </h1>
                    </div>
                    <div className="flex justify-center sm:justify-end">
                        <AuthButton />
                    </div>
                </div>

                {identity ? (
                    <div className="space-y-6 sm:space-y-8">
                        {/* Gallery Management */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-200 shadow-lg">
                            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-amber-800 flex items-center gap-2">
                                <Mountain className="w-5 h-5" />
                                Gallery Management
                            </h2>
                            <CollectionClaim />
                        </div>

                        {/* Artwork Creation */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-200 shadow-lg">
                            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-amber-800 flex items-center gap-2">
                                <Palette className="w-5 h-5" />
                                Create Artwork
                            </h2>
                            <MintNFT />
                        </div>

                        {/* Your Collection */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-200 shadow-lg">
                            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-amber-800 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Your Art Collection
                            </h2>
                            <OwnedNFTs />
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 sm:py-16">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-auto border border-amber-200 shadow-xl">
                            <div className="flex justify-center mb-4">
                                <div className="flex items-center gap-2">
                                    <Mountain className="w-8 h-8 text-amber-600" />
                                    <Palette className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-amber-800">
                                Welcome to Himalayan Masters Art
                            </h2>
                            <p className="text-amber-700 mb-4 sm:mb-6 text-sm sm:text-base">
                                Discover and collect authentic artworks from talented Himalayan artists. 
                                Please authenticate to access the gallery.
                            </p>
                            <div className="flex justify-center">
                                <AuthButton />
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <footer className="mt-12 sm:mt-16 text-center text-amber-600 text-xs sm:text-sm px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                        <span>
                            © 2025 Himalayan Masters Art. Built with{" "}
                            <Heart className="inline w-4 h-4 text-red-500" />{" "}
                            using
                        </span>
                        <a
                            href="https://caffeine.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                        >
                            caffeine.ai
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
