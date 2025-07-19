
import { memo } from "react";
import { useState } from "react";
import {FaEdit} from 'react-icons/fa'
const ImageSection = ({ image, newImage, setNewImage,isEditing }) => {
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setNewImage(file)
        if (file) {
            const showImage = URL.createObjectURL(file);
            setEditImage(showImage); // for show user what he choose
        }
    };
    const [editImage, setEditImage] = useState(null);
    return (
        <div className="relative">
            <img
                src={`${newImage?`${editImage}`:`http://localhost:8000${image}`}`}
                alt="Doctor"
                className="w-32 h-32 rounded-full object-cover border-2 border-blue-100"
            />
            {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full cursor-pointer">
                    <FaEdit size={12} />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoChange}
                    />
                </label>
            )}
        </div>
    )
}

export default memo(ImageSection)