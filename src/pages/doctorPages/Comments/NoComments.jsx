import commentSvg from '../../../assets/comment.svg';

const NoComments = () => {
    return (
        <div className='w-full flex flex-col gap-6 items-center justify-center'>
            <div className='w-fit'>
                    <img src={commentSvg} alt="comment" className='w-48 h-48 ' />
            </div>
            <span className='text-gray-500 dark:text-slate-300 text-center text-[20px] '>No Comments</span>
        </div>
    )
}

export default NoComments