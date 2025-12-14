import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <div className="text-lg">Not found</div>
            <div className="text-sm text-gray-500">
                You will be taken back home shortly.
            </div>
            <Link to="/" className="text-sm underline">
                Go home now
            </Link>
        </div>
    );
}

export default NotFoundPage