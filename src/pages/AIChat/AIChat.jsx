import { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { format } from 'date-fns'
import Nav from '../../components/Nav/Nav';
import handleSendMessage from './handler/handleSendMessage';
import Message from './Message';
import { RiRobot2Line } from "react-icons/ri";
import {Input} from '@/components/ui/input'
const AIChat = () => {
  const getTimeNow = () => {
    return format(new Date(), 'HH:mm:ss')
  }

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(
    JSON.parse(sessionStorage.getItem('messages'))
    ||
    [
      {
        text: 'Welcome to MediBot! I’m here to assist with your health queries. What’s on your mind today?',
        sender: 'AI',
        timestamp: getTimeNow(),
      },
    ]

  )



  const handleSend = async () => {

    setMessages(prev => [
      ...prev, {
        text: message,
        sender: 'User',
        timestamp: `${getTimeNow()}`
      }
    ]
    );
    setMessage('');
    setLoading(true);
    const response = await handleSendMessage(message, setLoading);
    console.log(response);
    if (response.status < 300) {
      setMessages(prev => [...prev, {
        text: response.data.candidates[0]?.content?.parts[0]?.text,
        sender: 'AI',
        timestamp: `${getTimeNow()}`,
      }])
    }
    else {
      setMessages(prev => [...prev, {
        text: response?.response?.data?.err?.name || response.response?.data?.msg || 'Ooops something went wrong !!',
        sender: 'AI',
        timestamp: `${getTimeNow()}`,
      }])
    }
  }

  useEffect(() => {
    sessionStorage.setItem('messages', JSON.stringify(messages));
  }, [messages])





  return (
    <div className="flex mb-20  flex-col min-h-screen w-full font-sans">

      <Nav />


      <div className="flex-1 pt-[80px] mb-20 relative overflow-x-hidden p-6 space-y-4">
        {messages.map((msg) => (
          <Message key={msg.timestamp} msg={msg} />
        ))}

        {
          loading &&
          <div className='flex justify-start items-center overflow-x-hidden gap-1.5'>
            <RiRobot2Line className="text-[var(--main-blue)] text-[30px]" />
            <div className='px-3 py-1 rounded-full  flex gap-2 items-center w-fit'>
              <span className='aiLoader rounded-full w-2.5 aspect-square bg-[var(--main-blue)]'></span>
              <span className='aiLoader rounded-full w-2.5 aspect-square bg-[var(--main-blue)]'></span>
              <span className='aiLoader rounded-full w-2.5 aspect-square bg-[var(--main-blue)]'></span>
            </div>
          </div>
        }

      </div>



      {/* Input Area */}
      
      <div className="bg-slate-200 dark:bg-slate-800 fixed bottom-[20px] rounded-lg  left-[50%] translate-x-[-50%] max-w-4xl w-[90%] md:p-6 p-4 flex items-center space-x-3">
        <Input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask your health question..." className="py-6 border-popover-foreground"  />
        <button
          disabled={loading}
          onClick={handleSend}
          className="p-3 bg-[var(--main-blue)] dark:bg-blue-400 cursor-pointer text-white rounded-full  hover:scale-[1.025] hover:translate-y-[-5px] duration-300"
        >
          <FaPaperPlane className="size-3" />
        </button>
      </div>
    </div>
  );
};

export default AIChat;