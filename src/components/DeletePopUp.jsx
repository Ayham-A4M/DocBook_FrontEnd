import { memo } from 'react';
import { FaExclamationTriangle, FaTimes, FaTrash } from "react-icons/fa";
import { useState } from "react";
const DeletePopUp = ({ setShowDeletePopUp, deleteFunction, deleteId, setRecords }) => {
    const [confirmationText, setConfirmationText] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleTextChange = (e) => {
        const text = e.target.value;
        setConfirmationText(text);
        setIsConfirmed(text.toUpperCase() === "DELETE");
    };
    const handleDeleteMethod = async () => {
        const response = deleteFunction(deleteId);  // ites resolve with true or false; and delete id for api
        if (response) {
            if (setRecords) {
                setRecords(prev => (prev?.filter(e => (e._id != deleteId))))
            }
            setShowDeletePopUp(false);

        }
    }
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[3px]    flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-2">
                        <FaExclamationTriangle className="text-yellow-500 text-xl" />
                        <h3 className="text-lg font-semibold text-black">Delete Action</h3>
                    </div>
                    <button
                        onClick={(e) => { e.preventDefault(); setShowDeletePopUp(false) }}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="mb-4 text-black">
                        Are you sure you want to delete <span className="font-semibold text-black ">This Record</span>?
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <FaExclamationTriangle className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    Warning: This action cannot be undone. Deleting this record will permanently remove
                                    their information and some related data will affected by this action
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="confirm-delete" className="block text-sm font-medium text-gray-700 mb-1">
                            Type <span className="font-mono font-bold">DELETE</span> to confirm
                        </label>
                        <input
                            type="text"
                            id="confirm-delete"
                            value={confirmationText}
                            onChange={handleTextChange}
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Type DELETE here"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end p-4 border-t space-x-3">
                    <button
                        onClick={(e) => { e.preventDefault(); setShowDeletePopUp(false) }}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none   focus:ring-blue-500 transition-colors"
                    >
                        Cancel
                    </button>
                    <button

                        disabled={!isConfirmed}
                        className={`px-4 py-2 rounded-md text-white focus:outline-none   flex items-center space-x-2 transition-colors ${isConfirmed
                            ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                            : "bg-red-300 cursor-not-allowed"
                            }`}
                        onClick={handleDeleteMethod}
                    >
                        <FaTrash className="text-sm" />
                        <span>Confirm Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(DeletePopUp);