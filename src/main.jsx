import { createRoot } from 'react-dom/client'
import { TestProvider } from './context/TestContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <TestProvider>
        <App />
    </TestProvider>
)
