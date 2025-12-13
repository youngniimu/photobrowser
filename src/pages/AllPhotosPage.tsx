import { useAllPhotos } from "../hooks/useAllPhotos";
import Thumbnail from "../components/Thumbnail";

const AllPhotosPage = () => {
    const { photos, loading, error } = useAllPhotos();

    if (loading) {
        return <div className="p-4">Loading…</div>;
    }

    if (error) {
        return <div className="p-4 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h1>All photos</h1>
            <div className="mt-3 grid grid-cols-4 gap-3">
                {photos.map((photo) => (
                    <Thumbnail photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default AllPhotosPage;