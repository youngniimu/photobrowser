import { Link } from "react-router-dom";

const AllPhotosPage = () => {
    return (
        <div style={{ padding: 16 }}>
            <h1>All photos</h1>
            <ul>
                <li>
                    <Link to="/photos/1">Open photo 1</Link>
                </li>
                <li>
                    <Link to="/photos/2">Open photo 2</Link>
                </li>
            </ul>
        </div>
    );
}

export default AllPhotosPage