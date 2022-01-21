import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
