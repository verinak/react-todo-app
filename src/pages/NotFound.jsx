import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
    return (
        <div className="p-8 flex-1 flex justify-center items-center">
            <div className="pb-18 space-y-8 text-center text-slate-900">
                <p className="font-bold text-2xl text-cyan-900/90 mb-0">404</p>
                <h2 className="font-medium text-5xl">Page Not Found</h2>
                <p className="text-lg">The page you're looking for doesn't exist or has been moved.</p>
                <Link
                    to="/home"
                    className="mt-4 rounded-3xl px-3 py-1 font-medium text-white bg-cyan-800/95 hover:bg-cyan-900/90
                        cursor-pointer w-fit m-auto flex items-center gap-1"
                >
                    <FaArrowLeft className="inline size-4 pt-0.5" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
