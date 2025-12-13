export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const API_BASE = "https://jsonplaceholder.typicode.com";
const PICSUM_BASE = "https://picsum.photos";
const THUMBNAIL_SIZE = "160/160"
const PHOTO_LIMIT = 20;

async function getJson<T>(path: string): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`);
    if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    } 
    return res.json();
}

export const picsumThumb = (seed: number) =>
    `${PICSUM_BASE}/seed/${seed}/${THUMBNAIL_SIZE}`;

export function fetchPhotos() {
    return getJson<Photo[]>(`/photos?_limit=${PHOTO_LIMIT}`);
}
