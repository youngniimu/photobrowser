import { useState } from "react";
import { useAllPhotos } from "../hooks/useAllPhotos";
import Thumbnail from "../components/Thumbnail";
import AllPhotosHeader from "../components/AllPhotosHeader";
import GeneralErrror from "../components/GeneralError";

const AllPhotosPage = () => {
    const [page, setPage] = useState(1);
    const { photos, loading, error } = useAllPhotos(page);

    if (error) {
        return <GeneralErrror />
    }

    return (
        <div className="mx-auto max-w-6xl p-4">
            <AllPhotosHeader
                page={page}
                onPrev={() => setPage((p) => Math.max(1, p - 1))}
                onNext={() => setPage((p) => p + 1)}
            />
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                {loading
                    ? Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-40 w-full animate-pulse rounded-lg bg-gray-200"
                        />
                    ))
                    : photos.map((photo) => (
                        <Thumbnail key={photo.id} photo={photo} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;