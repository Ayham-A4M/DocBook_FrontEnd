import { marked } from 'marked';
import { FaUserMd } from 'react-icons/fa';
import { RiRobot2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
const Message = ({ msg }) => {
    marked.setOptions({
        breaks: true,
        gfm: true
    })
    const MSG = marked.parse(msg?.text);
    return (
        <div

            className={`flex overflow-hidden ${msg.sender === 'User' ? 'justify-end' : 'justify-start '
                } `}
        >
            <div
                className={`w-[80%] max-w-[300px] md:w-[60%] md:max-w-[400px]   p-4 rounded-xl shadow-md ${msg.sender === 'User'
                    ? 'bg-gradient-to-b from-purple-500 to-violet-600  text-white'
                    : 'bg-white dark:text-slate-300 border dark:bg-card '
                    }`}
            >
                <div className="flex items-center space-x-2 mb-2">
                    {msg.sender === 'AI' && <RiRobot2Line className="text-[var(--main-blue)] w-6 h-6" />}
                    {msg.sender === 'User' && <CiUser className="text-white w-6 h-6" />}
                    <p className="font-bold text-sm ">{msg.sender}</p>
                </div>
                <p className="text-sm leading-relaxed " dangerouslySetInnerHTML={{ __html: MSG }} />
                {
                    msg.timestamp &&
                    <p className={`text-xs ${msg.sender == "AI" ? 'text-black' : 'text-slate-200'}  mt-2 italic dark:text-slate-300`}>{msg.timestamp}</p>
                }
            </div>
        </div>
    )
}

export default Message