import { memo } from 'react';

const Label = ({ icon, name }) => {
    return (
        <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            {icon}
            {name}
        </label>
    );
};

export default memo(Label);