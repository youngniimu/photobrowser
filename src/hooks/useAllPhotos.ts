import { useEffect, useState } from "react";
import { fetchPhotos, type Photo } from "../api";

export function useAllPhotos() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        setLoading(true);
        setError(null);

        fetchPhotos()
            .then((data) => {
                if (!cancelled) setPhotos(data);
            })
            .catch((e: unknown) => {
                if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return { photos, loading, error };
}