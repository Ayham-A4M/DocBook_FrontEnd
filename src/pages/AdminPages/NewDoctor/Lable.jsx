

// const Lable = ({ icon, name }) => {
//     return (
//         <label className="text-gray-700 mb-2 flex items-center">
//             {icon}
//             {name}
//         </label>
//     )
// }

// export default Lable
const Label = ({ icon, name }) => {
    return (
        <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
            {icon}
            {name}
        </label>
    );
};

export default Label;