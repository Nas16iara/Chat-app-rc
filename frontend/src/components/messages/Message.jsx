import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../store/useConversation.js';
import { extractTime } from '../../utils/extractTime.js';
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;

  const formattedTime = extractTime(message.createdAt);

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-indigo-500' : 'bg-pink-500 ';
  const shakeClass = message.shouldShake ? "shake" : "";


  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                    alt="Tailwind CSS chat bubble component" 
                    src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className="chat-footer opacity-100 text-xs flex gap-1 items-center text-slate-700">{ formattedTime } </div>
    </div>
  )
}

export default Message;


// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img 
//                     alt="Tailwind CSS chat bubble component" 
//                     src={"https:cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" } />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hi Whats up</div>
//         <div className="chat-footer opacity-100 text-xs flex gap-1 items-center text-slate-700">12:42</div>
//     </div>
//   )
// }

// export default Message;