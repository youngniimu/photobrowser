import { Link, useParams } from "react-router-dom";
import { picsumFull, } from "../api";
import { usePhotoDetails } from "../hooks/userPhotoDetails";

const PhotoDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { photo, loading, error } = usePhotoDetails(Number(id));

    if (loading) {
        return <div className="p-4">Loading…</div>;
    }

    if (error) {
        return <div className="p-4 text-red-600">{error}</div>;
    }

    if (!photo) {
        return <div className="p-4">No photo found.</div>;
    }

    return (
        <div className="p-4">
            <Link to="/" className="text-sm">
                ← Back to all photos
            </Link>

            <img
                src={picsumFull(photo.id)}
                alt={photo.title}
                className="mt-4 w-full max-w-3xl rounded-lg"
            />

            <h1 className="mt-4 text-lg font-semibold">{photo.title}</h1>
            <div className="text-sm text-gray-600">
                Photo #{photo.id} · Album #{photo.albumId}
            </div>
        </div>
    );
};

export default PhotoDetailsPage;