import { useState, useEffect } from 'react'
import './App.css'
import {ChatInput} from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import {Chatbot} from 'supersimpledev';


function App(){
        /*React.useState returns an array*/
        const [chatMessages,setChatMessages] = useState([]);
        const [isLoading,setIsLoading] = useState(0);
        // const [chatMessages,setChatMessages] = array;
        // const chatMessages = array[0]; /*current data*/
        // const setChatMessages = array[1];
        useEffect(()=>{
          console.log("run once useEffect");
          Chatbot.addResponses(
            {
              "Who are you":"I am jhaat GPT",
              "Greatest country?":"INDIA"
            }
          );
        },[]);
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
