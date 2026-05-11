import {useState} from 'react';
import {Chatbot} from 'supersimpledev';

function ChatInput({chatMessages, setChatMessages, isLoading, setIsLoading}){
        const [inputText, setInputText] = useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }
        async function sendMessage(){
          if(isLoading===1||inputText===''){
            return;
          }
          console.log(inputText);
          const newChatMessages=[
            ...chatMessages,
            {
              message:inputText,
              sender:'user',
              id:crypto.randomUUID()
            }
          ];
          /*here add a new message in chatMessages using setChatMessages updater function*/
          /*... is the spread operator, use to copy values from 1 array to another*/
          setIsLoading(1);
          setChatMessages([
            ...newChatMessages,
            {
              message:<img src='loading-spinner.gif' className="spinner"></img>,
              sender:'robot',
              id:crypto.randomUUID()
            }
          ]);
          setInputText('');
          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message:response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
          setIsLoading(0);
        }
        function handleKeyPress(event){
          if(event.key==='Enter'){
            /*send message again*/
            console.log("enter key pressed!");
            sendMessage();
          }
          else if(event.key === 'Escape'){
            setInputText('');
          }
        }
        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyPress}
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">Send</button>
          </div>
        );
      }