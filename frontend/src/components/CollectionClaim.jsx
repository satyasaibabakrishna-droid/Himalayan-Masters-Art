import { useCollectionStatus, useClaimCollection } from '../hooks/useQueries';
import { CheckCircle, Mountain } from 'lucide-react';

export function CollectionClaim() {
  const { data: hasBeenClaimed, isLoading: isCheckingClaim } = useCollectionStatus();
  const { mutate: claimCollection, isPending: isClaiming } = useClaimCollection();

  if (isCheckingClaim) {
    return (
      <div className="flex items-center gap-2 text-amber-600 text-sm">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-500"></div>
        Checking gallery status...
      </div>
    );
  }

  if (hasBeenClaimed) {
    return (
      <div className="flex items-center gap-2 text-green-600 text-sm sm:text-base">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        Gallery has been established
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-amber-700 text-sm sm:text-base">This gallery is available to establish!</p>
      <button
        onClick={() => claimCollection()}
        disabled={isClaiming}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed rounded-lg transition-colors text-sm w-full sm:w-auto text-white"
      >
        {isClaiming ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Establishing...
          </>
        ) : (
          <>
            <Mountain className="w-4 h-4" />
            Establish Gallery
          </>
        )}
      </button>
    </div>
  );
}
