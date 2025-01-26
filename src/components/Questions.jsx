import { useTest } from '../context/TestContext'
import ResultScreen from './ResultScreen'


function Questions() {

  const { 
    questions, 
    currentQuestion, 
    showChoice, 
    showResult, 
    timeLeft, 
    handleChoice
  } = useTest()

  const question = questions[currentQuestion]

  if (showResult) {
    return <ResultScreen />
  }

  return (
    <>
      <div>
        <div className='time'>Kalan süre: {timeLeft} saniye</div>
        <img src={question.media} alt="" />
        <p className='questionsQuestion'>{question.question}</p>
        {showChoice && (
          <div className='buttonGroup'>
            {question.options.map((option, index) => (
              <button className='optionsButtons' key={index} onClick={handleChoice}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Questions