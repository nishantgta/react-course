import './App.css';
import {useState, useRef, useEffect} from 'react';
import dayjs from 'dayjs';

function App(){
        const [showPassword, setShowPassword] = useState(false);
        const [time, setTime] = useState(dayjs().format('HH:mm:ss'));
        const [count, setCount] = useState(0);
        const counterButtonRef = useRef(null);
        const [applyButtonClicked, setApplyButtonClicked] = useState(false);

        function showPasswordClickHandler(){
            console.log(time);
            setShowPassword(!showPassword);
        }

        function resetButtonHandler(){
            setCount(0);
        }

        function autoClickButtonHandler(){
            console.log('bhai mera');
            const tempVar = applyButtonClicked;
            setApplyButtonClicked(!tempVar);
                // setInterval(()=>{
                //     const buttonElem = counterButtonRef.current;
                //     if(buttonElem){
                //         buttonElem.click();
                //     }
                // },1000);
            //console.log("Bhai mera="+applyButtonClicked);
        }

        useEffect(()=>{
            setInterval(()=>{
                console.log('run code!');
                setTime(dayjs().format('HH:mm:ss'));
            },1000)
        },[]);

        useEffect(()=>{
            setInterval(()=>{
                const buttonElem = counterButtonRef.current;
                console.log("Button Clicked value="+applyButtonClicked);
                if(buttonElem){
                    if(applyButtonClicked === true){
                        buttonElem.click();
                    }
                }
            },1000);
        },[applyButtonClicked]);

        function counterButtonClicked(){
            setCount(count+1);
        }

        return (
            <div>
                <h2 className="heading">Hello, welcome to my website</h2>
                <input className="username" placeholder="Email"/>
                <br/>
                <input className="password" placeholder="Password" type={showPassword===true?"text":"password"}/>
                <button className="show-password" onClick={showPasswordClickHandler}>
                    {showPassword===true?"Hide":"Show"}
                </button>
                <br/>
                <button className="login-button">Login</button>
                <button className="sign-up-button">Sign up</button>
                <br/>
                <p>Current time: {time}</p>
                <div className="counter-element">
                    <button className="click-counter-button" ref={counterButtonRef} onClick={counterButtonClicked}>Clicked {count} time</button> 
                    <button className="reset-button" onClick={resetButtonHandler}>Reset</button>
                    <button className="auto-click-button" onClick={autoClickButtonHandler}>Auto Click</button>   
                </div>
            </div>
        );
      }

export default App
