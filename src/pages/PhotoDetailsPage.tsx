import { Link, useParams } from "react-router-dom";

const PhotoDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div style={{ padding: 16 }}>
            <h1>Photo {id}</h1>
            <Link to="/">← Back to all photos</Link>
        </div>
    );
}

export default PhotoDetailsPage