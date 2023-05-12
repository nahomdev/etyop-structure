export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <svg className="animate-spin h-16 w-16 text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3.073A7.96 7.96 0 0115.073 8H16zm-8 8a8 8 0 008 8v-3.073A7.96 7.96 0 018.927 16H8z"></path>
            </svg>
            <p className="text-gray-500 text-xl font-medium">Loading...</p>
        </div>
    );
}