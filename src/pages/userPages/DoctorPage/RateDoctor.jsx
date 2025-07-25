import { useState } from 'react';
import { BsChatHeart } from "react-icons/bs";
import { FaStarHalf, FaStar, FaUser } from "react-icons/fa6";
import { FaBackspace, FaHandHoldingMedical } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import { Button } from '@/components/ui/button'
import handleCreateNewComment from './handler/handleCreateNewComment';
import { BsEmojiSmileFill, BsEmojiAngryFill, BsEmojiFrownFill, BsFillEmojiSurpriseFill, BsFillEmojiSunglassesFill } from "react-icons/bs";

const feelings = [
    {
        emoji: BsEmojiSmileFill,
        color: 'text-green-400',
        value: 'happy',
    },
    {
        emoji: BsEmojiAngryFill,
        color: 'text-red-500',
        value: 'angry',
    },
    {
        emoji: BsEmojiFrownFill,
        color: 'text-yellow-400',
        value: 'sad',
    },
    {
        emoji: BsFillEmojiSurpriseFill,
        color: 'text-blue-400',
        value: 'surprised',
    },
    {
        emoji: BsFillEmojiSunglassesFill,
        color: 'text-orange-400',
        value: 'great',
    }
];

const RateDoctor = ({ doctorId }) => {
    const [stars, setStars] = useState(0);
    const [halfStar, setHalfStar] = useState(0);
    const [feeling, setFeeling] = useState('');
    const [opinion, setOpinion] = useState('');
    const [sendingReq, setSendingReq] = useState(false);
    const [isUserRateDoctor, setIsUserRateDoctor] = useState(false);

    const newStar = (event) => {
        event.preventDefault();
        if (halfStar < 1 && stars < 5) {
            setStars(prev => prev + 1);
        }
    };

    const newHalfStar = (event) => {
        event.preventDefault();
        if (halfStar < 1 && stars != 5) {
            setHalfStar(1);
        }
    };

    const deleteLastStar = (event) => {
        event.preventDefault();
        if (halfStar) { setHalfStar(0); }
        else if (stars > 0) {
            setStars(prev => prev - 1);
        }
    };

    const submitRate = (event) => {
        event.preventDefault();
        handleCreateNewComment(stars, halfStar, opinion, feeling, doctorId, setSendingReq, setIsUserRateDoctor);
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6 bg-card rounded-2xl shadow-lg flex flex-col gap-6">
            {isUserRateDoctor ? (
                <div className="flex flex-col items-center justify-center py-8 gap-4">
                    <BsChatHeart className="text-4xl text-[var(--main-blue)]"  data-aos="fade-up" data-aos-duration="600" />
                    <span className="text-blue-600 italic text-xl font-semibold text-center"  data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                        Thanks for helping us improve our system!
                    </span>
                </div>
            ) : (
                <>
                    {/* Star Rating Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-[var(--main-blue)] flex items-center gap-2">
                            <FaStar className="text-xl" /> Rate the Doctor
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                            <button
                                onClick={newStar}
                                className="py-2 px-4 cursor-pointer bg-blue-50 dark:bg-slate-700 text-[var(--main-blue)] dark:text-slate-100 rounded-lg hover:bg-blue-100 transition-all duration-300 shadow-sm"
                            >
                                <FaStar className="text-lg" />
                            </button>
                            <button
                                onClick={newHalfStar}
                                className="py-2 px-4 cursor-pointer bg-blue-50 dark:text-slate-100 dark:bg-slate-700 text-[var(--main-blue)] rounded-lg hover:bg-blue-100 transition-all duration-300 shadow-sm"
                            >
                                <FaStarHalf className="text-lg" />
                            </button>
                            <div className="flex items-center gap-2">
                                {stars > 0 && [...Array(stars)].map(() => (
                                    <FaStar key={Math.random() * 1000} className="text-lg text-orange-400" />
                                ))}
                                {halfStar === 1 && <FaStarHalf className="text-lg text-orange-400" />}
                                {(stars > 0 || halfStar) ? (
                                    <button onClick={deleteLastStar} className="ml-2">
                                        <FaBackspace className="text-xl cursor-pointer text-red-400 hover:text-red-500 duration-300 transition-all" />
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    {/* Feelings Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                            <BsEmojiSmileFill className="text-xl" /> How are you feeling?
                        </h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {feelings.map((e, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <button
                                        onClick={() => setFeeling(e.value)}
                                        className={`text-3xl cursor-pointer  ${e.color} hover:scale-110 transition-all duration-300`}
                                    >
                                        <e.emoji />
                                    </button>
                                    {e.value === feeling && (
                                        <IoMdArrowDropup className={`text-2xl ${e.color}`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Opinion Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                            <FaUser className="text-xl" /> Your Opinion
                        </h3>
                        <input
                            value={opinion}
                            onChange={(e) => setOpinion(e.target.value)}
                            placeholder="Share your opinion..."
                            className='inputStyle'
                            style={{ paddingLeft: '15px' }}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        disabled={sendingReq}
                        onClick={submitRate}
                        className={`w-full py-6 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-md  cursor-pointer bg-[var(--main-blue)] hover:bg-blue-700`}
                    >
                        {sendingReq ? '••••' : 'Submit Rating'}
                    </Button>
                </>
            )}
        </div>
    );
};

export default RateDoctor;
