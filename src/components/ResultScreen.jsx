import { useEffect } from "react"
import { useTest } from "../context/TestContext"



function ResultScreen() {
  const { 
    usersAnswer, 
    questions, 
    trueAnswers,  
    falseAnswers, 
    emptyAnswers,
    info
  } = useTest()

  return (
    <div>
      <h1 className="resultHeader">Test Sonuçlarınız!</h1>
      <h2 className="dogruYanlisBos"><span className="dogruSpan">Doğru Sayısı: {trueAnswers}</span> <span className="yanlisSpan">Yanlış Sayıs: {falseAnswers}</span>  <span className="bosSpan">Boş Sayısı: {emptyAnswers}</span> </h2>
      
      <div className="resultDivs">
        <div className="userAnswer">
          <h3>Kullanıcı cevapları</h3>
          <ul>
            {usersAnswer.map((item, index) => (
              <li key={index}>{item === null ? "Boş" : item}</li>
            ))}
          </ul>
        </div>
        <div className="dataAnswers">
          <h3>Cevap anahtarı</h3>
          <ul>
            {questions.map((question,index) => (
              <li key={index}>{question.answer}</li>
            ))}
          </ul>
        </div>
        <div className="result">
          <h3>Doğru yanlış ve boş sorularınız</h3>
          <ul>
            {info.map((item,index) => (
              <li key={index}>{item}</li> 
            ))}
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default ResultScreen