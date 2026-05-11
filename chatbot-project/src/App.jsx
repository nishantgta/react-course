import { useState, useRef, useEffect } from 'react'
import './App.css'
import RobotProfileImage from './assets/robot.jpg';
import UserProfileImage from './assets/user.jpg';

      function ChatMessage({message, sender}){
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
              </div>
              {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile"/>
              )}
            </div>
          );
      }

      function useAutoScroll(dependencies){
        const containerRef = useRef(null);
        useEffect(()=>{
          const containerElem = containerRef.current;
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        },dependencies);
        return containerRef;
      }

      function ChatMessages({chatMessages}){
        /*run some code after the component is created or updated*/
        const chatMessagesRef = useAutoScroll([chatMessages]);
        // React.useEffect(()=>{
        //   // console.log("Use Effect!!");
        //   console.log(chatMessagesRef.current);
        //   const containerElem = chatMessagesRef.current;
        //   if(containerElem){
        //     containerElem.scrollTop = containerElem.scrollHeight;
        //   }
        // },[chatMessages]);
        const chatMessageComponents = chatMessages.map((chatMessage)=>{
          return (
              <ChatMessage 
                message={chatMessage.message} 
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            );
        });
        return (
          <div className="chat-messages-container"
            ref={chatMessagesRef}>
            {chatMessageComponents}
          </div>
        );
      }

function App(){
        /*React.useState returns an array*/
        const [chatMessages,setChatMessages] = useState([]);
        const [isLoading,setIsLoading] = useState(0);
        // const [chatMessages,setChatMessages] = array;
        // const chatMessages = array[0]; /*current data*/
        // const setChatMessages = array[1];
        return (
          <div className="app-container">
            {chatMessages.length === 0 ? <div>Welcome to the chatbot project! Send a message using the textbox below</div>:<></>}
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages} 
              setChatMessages={setChatMessages}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
        </div>
        );
      }

export default App
