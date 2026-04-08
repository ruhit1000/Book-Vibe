import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 font-sans p-4">
            <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-9xl font-extrabold text-blue-600 tracking-tighter mb-4">
                    404
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Page Not Found
                </h1>
                <p className="text-gray-500 mb-8">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;