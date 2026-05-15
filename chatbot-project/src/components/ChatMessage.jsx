import RobotProfileImage from '../assets/robot.jpg';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';

export function ChatMessage({message, sender, time}){
        //console.log(props);
        //const message = props.message;
        //const sender = props.sender;
        //const {message,sender} = props;
        /*if(sender === 'robot'){
          return (
            <div>
              <img src="robot.jpg" width="50"/>
              {message}
            </div>
          );  
        }*/
          return (
            <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
              {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile"/>
              )}
              <div className="chat-message-text">
                {message}
                <div className="message-time">{time}</div>  
              </div>
              {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile"/>
              )}
            </div>
          );
      }