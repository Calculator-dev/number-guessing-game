import { useState, useEffect } from "react";

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const Buttons = () => {

    const [input, setInput] = useState("");
    const [attempts, setAttempts] = useState(10);
    const [msg, setMsg] = useState("");
    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [showButton, setShowButton] = useState(false);

    const succes = <p className="succes">Congratulations! You won</p>
    const low = <p className="low"> Your number is too low!</p>
    const high = <p className="high">Your number is too high!</p>


    function inputHandler(e) {
        setInput(parseInt(e.target.value));
    }

    function submitHandler(e) {
        e.preventDefault();
        if (input < 1 || input > 100 || attempts === 0) return;
        if (input === randomNumber) {
            setPreviousGuesses([...previousGuesses, input]);
            setAttempts((prevCount) => prevCount - 1);
            setShowButton(true);
            setMsg(succes);
        }
        else if (input < randomNumber) {
            setPreviousGuesses([...previousGuesses, input]);
            setAttempts((prevCount) => prevCount - 1);
            setInput("");
            setMsg(low);
        }
        else {
            setPreviousGuesses([...previousGuesses, input]);
            setAttempts((prevCount) => prevCount - 1);
            setInput("");
            setMsg(high);
        }
    }


    function clearHandler(e) {
        e.preventDefault();
        setInput("");
    }

    function resetHandler() {
        setInput("");
    }

    useEffect(() => {
        if (attempts === 0 && input === randomNumber) {
            setMsg(<p className="succes">Congratulations! You won</p>);
            setShowButton(true);
        }
        else if (attempts === 0) {
            setMsg(<p className="gameOver">Game Over ! You lost</p>);
            setShowButton(true);
        }
    }, [attempts, input])

    return (
        <form className="form">
            <h1>Number Guessing Game</h1>
            <label>Enter a number: </label>
            <input disabled={previousGuesses[previousGuesses.length - 1] === randomNumber} type="number" value={input} onChange={inputHandler}></input>
            <br />
            <button disabled={previousGuesses[previousGuesses.length - 1] === randomNumber} className="submit" onClick={submitHandler}>Submit</button>
            <button disabled={previousGuesses[previousGuesses.length - 1] === randomNumber} className="clear" onClick={clearHandler}>Clear</button>
            <button disabled={previousGuesses[previousGuesses.length - 1] === randomNumber || attempts === 0} className="reset" onClick={resetHandler}>Reset</button>
            <p>Remaining attempts: {attempts}</p>
            <p>Previous Guesses: {previousGuesses.join(", ")}</p>
            {msg}
            {showButton && <button className="startNewGame" onClick={resetHandler}>Start New Game</button>}
        </form>
    )

}

export default Buttons;