

const Card = ({title,points}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-main-blue duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-semibold text-main-blue mb-3">{title}</h3>
            <ul className="text-gray-700 space-y-2">
                {
                    points.map((e,index)=>(
                        <li key={index}>• {e}</li>
                    ))
                }
             
            </ul>
          </div>
  )
}

export default Card