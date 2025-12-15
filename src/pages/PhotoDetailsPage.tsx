import { useNavigate, useParams } from "react-router-dom";
import { picsumFull, } from "../api";
import { usePhotoDetails } from "../hooks/usePhotoDetails";
import GeneralErrror from "../components/GeneralError";

const PhotoDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { photo, loading, error } = usePhotoDetails(Number(id));

    if (error) {
        return <GeneralErrror />;
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <button
                type="button"
                onClick={() => {
                    if (window.history.length > 1) navigate(-1);
                    else navigate("/");
                }}
                className="absolute left-4 top-4 z-10 rounded-md bg-black/60 px-3 py-1.5 text-sm text-white"
            >
                ← Back
            </button>

            {loading && (
                <>
                    <div className="h-full w-full animate-pulse bg-gray-200" />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3">
                        <div className="mb-2 h-5 w-2/3 animate-pulse rounded bg-gray-400/50" />
                        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-400/40" />
                    </div>
                </>
            )}

            {!loading && photo && (
                <>
                    <img
                        src={picsumFull(photo.id)}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/70 px-4 py-3 text-white">
                        <h1 className="text-lg font-semibold">{photo.title}</h1>
                        <div className="text-sm opacity-80">
                            Photo #{photo.id} · Album #{photo.albumId}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PhotoDetailsPage;