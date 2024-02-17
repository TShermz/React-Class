import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        //the + sign fixes typing of event value from string to number
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput  userInput={userInput} onChangeInput={handleChange}/>
      {inputIsValid && <Result userInput={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
    </>
  );
}

export default App
