import { useEffect, useState } from "react";
import { fetchPhoto, type Photo } from "../api";

export function usePhotoDetails(photoId: number | null) {
    const [photo, setPhoto] = useState<Photo | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (photoId == null || !Number.isFinite(photoId)) {
            setError("Invalid photo id");
            return;
        }

        let cancelled = false;

        setLoading(true);
        setError(null);
        setPhoto(null);

        fetchPhoto(photoId)
            .then((data) => {
                if (!cancelled) setPhoto(data);
            })
            .catch((e: unknown) => {
                if (!cancelled)
                    setError(e instanceof Error ? e.message : "Unknown error");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [photoId]);

    return { photo, loading, error };
}