import './App.css'
import HomeScreen from './components/HomeScreen'
import { useTest } from './context/TestContext'
import Questions from './components/Questions'


function App() {

  const { isTestStarted } = useTest()

  return (
    <>
      {isTestStarted ? <Questions /> : <HomeScreen />}
    </>
  );
}

export default App
