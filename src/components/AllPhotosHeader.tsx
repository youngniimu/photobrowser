import { ChevronLeft, ChevronRight } from "lucide-react";

type HeaderProps = {
    page: number;
    onPrev: () => void;
    onNext: () => void;
};


const AllPhotosHeader
    = ({
        page,
        onPrev,
        onNext,
    }: HeaderProps) => {
        return (
            <div className="mb-4 flex items-center justify-between">
                <button
                    onClick={onPrev}
                    disabled={page === 1}
                    className="rounded-md p-1 disabled:opacity-30"
                    aria-label="Previous page"
                >
                    <ChevronLeft className="h-7 w-7" />
                </button>
                <div className="text-center">
                    <h1 className="text-lg font-semibold">Photo Browser</h1>
                    <div className="text-xs text-gray-500">Page {page}</div>
                </div>

                <button
                    onClick={onNext}
                    className="rounded-md p-1 disabled:opacity-30"
                    aria-label="Next page"
                >
                    <ChevronRight className="h-7 w-7" />
                </button>
            </div>
        );
    };

export default AllPhotosHeader