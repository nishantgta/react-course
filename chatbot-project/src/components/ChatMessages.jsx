import {useRef, useEffect} from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

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
                time={chatMessage.time}
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

export default ChatMessages;