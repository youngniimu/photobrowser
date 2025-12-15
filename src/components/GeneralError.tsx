const GeneralErrror = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center px-6">
            <div className="text-8xl font-extrabold text-red-600">✕</div>
            <div className="text-2xl font-semibold">Something went wrong</div>
            <div className="text-sm text-gray-600">
                We're terribly sorry. Please refresh the page and try again.
            </div>
        </div>
    );
}

export default GeneralErrror