import { React, useState } from "react";
import "./App.css";
import { quizData, sortedListAnswers } from "./Assets/quizz.js";
import Select from "react-select";
import { Random } from "./Utilities/Random.js";
import { selectCustomStyles } from "./Utilities/SelectReactSetting.js";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { ResultsPage } from "./Components/ResultsPage.js";


function App() {
  const allData = quizData;
  const [gameData, setGameData] = useState({ Q: "Start", A: "Start" });
  const [answerData, setAnswerData] = useState(sortedListAnswers);
  const [answer, setAnswer] = useState("");
  const [winlose, setWinlose] = useState("");
  const [answersCorrect, setAnswersCorrect] = useState([]);
  const [answersIncorrect, setAnswersIncorrect] = useState([]);




  const MySwal = withReactContent(Swal)

  let answerLet;
  let gameDataLet = { Q: "Start", A: "Start" };
  const onClickHandlerNewGame = () => {
    setAnswer("");
    setWinlose("");
    let rand = Random(allData.length);
    //the actual question and answer
    setGameData({ Q: allData[rand].Q, A: allData[rand].A });
    gameDataLet = { Q: allData[rand].Q, A: allData[rand].A };
    console.log("rand", rand);
    console.log("gameData Q= ", gameData.Q + " A= " + gameData.A);
    console.log("gameDataLet Q= ", gameDataLet.Q + " A= " + gameDataLet.A);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.value); //this holds the state version - it can get passed around and refreshes the front end
    answerLet = e.value; //we need to pass the answer as a let so that its available immediatly and not refreshing the screen
    console.log("answer = ", answerLet + "  gameplay = " + gameData.A + "  gameDataLet.A = " + gameDataLet.A);
    setWinlose("- you " + winLoseCalc(answerLet));
  };

  const winLoseCalc = (answerLet) => {
    if (answerLet !== "undefined") {
      if (answerLet === gameData.A) {

        MySwal.fire({
          icon: 'Success',
          title: 'You Win',
          text: 'The answer is ' + gameData.A,
          footer: 'Have another go'

        })
        setAnswersCorrect([...answersCorrect, gameData.A])

        return "win";
      } else {

        MySwal.fire({
          icon: 'error',
          title: 'You Lose',
          text: 'The answer is ' + gameData.A,
          footer: 'Nice try have another go'


        })
        setAnswersIncorrect([...answersIncorrect, gameData.Q + " is not " + answerLet])
        return "lose";
      }
    }
  };




  return (
    <div className='App'>
      <button
        className='buttonSubmit btn btn-primary'
        onClick={onClickHandlerNewGame}
      >
        Choose a Random Question
      </button>
      <div>
        <h2>{gameData.Q}</h2>
        {/* <h4>{answer ? "You selected " + answer + winlose : ""}</h4> */}
      </div>
      <div className='col-sm'>
        <Select
          styles={selectCustomStyles}
          options={answerData} //list of data
          className='selectDropDownStyle'
          value={answer}
          onChange={handleAnswerChange} //extract the  answer
          placeholder={answer !== "" ? answer : "Select an Answer"} //'Select the place'
          controlShouldRenderValue={false}
        />
      </div>


      <ResultsPage answersCorrect={answersCorrect} answersIncorrect={answersIncorrect} />


    </div>
  );
}

export default App;
