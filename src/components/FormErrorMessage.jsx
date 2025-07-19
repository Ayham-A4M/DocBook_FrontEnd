
import { memo } from 'react';
const FormErrorMessage = ({ message }) => {
    return (
        <span className="text-red-500 font-extralight text-[14px]">
            {message}
        </span>
    )
}

export default memo(FormErrorMessage)