import { Link } from "react-router-dom"
import { picsumThumb, type Photo } from "../api"

type ThumbnailProps = {
    photo: Photo
}

const Thumbnail = ({ photo }: ThumbnailProps) => {
    return (
        <Link
            to={`/photos/${photo.id}`}
            className="group relative block"
        >
            <img
                src={picsumThumb(photo.id)}
                className="h-40 w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-end p-2 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="w-full rounded-lg bg-black/70 px-3 py-2 text-white">
                    <div className="text-sm font-semibold">
                        {photo.title}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Thumbnail