import { useAllPhotos } from "../hooks/useAllPhotos";
import Thumbnail from "../components/Thumbnail";
import AllPhotosHeader from "../components/AllPhotosHeader";
import GeneralErrror from "../components/GeneralError";
import { useSearchParams } from "react-router-dom";

const AllPhotosPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Math.max(1, Number(searchParams.get("page")) || 1);

    const setPage = (nextPage: number) => {
        setSearchParams((prev) => {
            const p = new URLSearchParams(prev);
            p.set("page", String(Math.max(1, nextPage)));
            return p;
        });
    };

    const { photos, loading, error } = useAllPhotos(page);

    if (error) {
        return <GeneralErrror />
    }

    return (
        <div className="mx-auto max-w-6xl p-4">
            <AllPhotosHeader
                page={page}
                onPrev={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
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