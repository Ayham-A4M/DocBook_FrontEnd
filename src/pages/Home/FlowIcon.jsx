

const FlowIcon = ({ icon, bgColor }) => {
    return (
        <div className="flowIcon flex justify-center hover:scale-105 duration-300">
            <div className={` p-8 rounded-[8px] ${bgColor} w-fit text-2xl text-white`}>
                {
                    icon
                }
            </div>
        </div>
    )
}

export default FlowIcon