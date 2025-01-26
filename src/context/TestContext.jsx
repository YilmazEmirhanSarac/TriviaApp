import { createContext, useContext, useState, useEffect} from 'react'
import { questionData } from '../questionData'
import PropTypes from 'prop-types';

const TestContext = createContext() 

export const TestProvider = ({children}) => {
    TestProvider.propTypes = {
        children : PropTypes.node.isRequired,
    };

    const [questions, setQuestions] = useState(questionData) // to store the questions
    const [currentQuestion, setCurrentQuestion] = useState(0) // to store the current question
    const [showChoice, setShowChoice] = useState(false) // to show the choices
    const [usersAnswer, setUsersAnswer] = useState([]) // to store the users answer
    const [showResult, setShowResult] = useState(false) // to show the result

    const [trueAnswers, setTrueAnswers] = useState(0) // to store the true answers
    const [falseAnswers, setFalseAnswers] = useState(0) // to store the false answers
    const [emptyAnswers, setEmptyAnswers] = useState(0) // to store the empty answers

    const [isTestStarted, setIsTestStarted] = useState(false) // to start the test
    const [timeLeft, setTimeLeft] = useState(30) // to start the timer
    
    const [info, setInfo] =useState([]) // to show true, false and empty answers

    // Test starter function
    
    // Questions events
    useEffect(() => {
        if (!startTest || currentQuestion >= questions.length) {
          return
        }
    
        setTimeLeft(30)
        setShowChoice(false)
    
        const choiceTimer = setTimeout (() => {
          setShowChoice(true)
        }, 4000)
    
        const intervalId = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(intervalId)
              clearTimeout(choiceTimer)
              if (currentQuestion < questions.length - 1) {
                setCurrentQuestion((prev) => prev + 1)
                setUsersAnswer((prev) => [...prev, null])
              } else {
                setShowResult(true)
              }
              return 0
            }
            return prevTime - 1
          })
        }, 1000)
      
      return () => {
        clearTimeout(choiceTimer)
        clearInterval(intervalId)
      } 
    }, [currentQuestion, questions.length, isTestStarted])

    const startTest = () => {
      setIsTestStarted(true)
      setCurrentQuestion(0);
      setUsersAnswer([]);
      setShowResult(false);
      setTrueAnswers(0);
      setFalseAnswers(0);
      setEmptyAnswers(0);
      setInfo([]);
      setTimeLeft(30);
    }

    const handleChoice = (selectedOption) => {
        const selectedAnswer = selectedOption.target.innerText
        setUsersAnswer((prev) => [...prev, selectedAnswer])
        // selectedAnswer === question.answer ? console.log("Dogru") : console.log("Yanlış")
        
        if (currentQuestion < questions.length -1) {
          setCurrentQuestion((prev) => prev + 1)
        } else {
          setShowResult(true)
        }
    }

    useEffect (() => {
      let trueCount = 0
      let falseCount = 0
      let emptyCount = 0
      const results = []
  
      questions.forEach((item, index) => {
        if (usersAnswer[index] === null ) {
          emptyCount++
          results.push("Boş")
        } else if (usersAnswer[index] === item.answer) {
          trueCount++
          results.push("Doğru")
        } else {
          falseCount++
          results.push("Yanlış")
        }
      })
      setTrueAnswers(trueCount)
      setFalseAnswers(falseCount)
      setEmptyAnswers(emptyCount)
      setInfo(results)
    }, [usersAnswer, questions, setTrueAnswers, setFalseAnswers, setEmptyAnswers, setInfo])

    const data = {
        questions,
        currentQuestion,
        showChoice,
        usersAnswer,
        showResult,
        trueAnswers, setTrueAnswers,
        falseAnswers, setFalseAnswers,
        emptyAnswers, setEmptyAnswers,
        isTestStarted, setIsTestStarted,
        timeLeft,
        info, setInfo,
        startTest,
        handleChoice
    }
    
    return <TestContext.Provider value={data}>{children} </TestContext.Provider>;
}

export const useTest = () => useContext(TestContext);