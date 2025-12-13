import { Link } from "react-router-dom"
import { picsumThumb, type Photo } from "../api"

type ThumbnailProps = {
    photo: Photo
}

const Thumbnail = ({ photo }: ThumbnailProps) => {
    return <Link
        key={photo.id}
        to={`/photos/${photo.id}`}
    >
        <img
            src={picsumThumb(photo.id)}
            alt={photo.title}
            className="h-40 w-full rounded-lg"
        />
        <div className="text-xs">
            {photo.title}
        </div>
    </Link>
}

export default Thumbnail