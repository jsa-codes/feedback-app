import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { Header } from './components/Header'
import { FeedbackData } from './components/data/FeedbackData'
import { FeedbackList } from './components/FeedbackList'
import { FeedbackStats } from './components/FeedbackStats'
import { FeedbackForm } from './components/FeedbackForm'
import { AboutPage } from './components/pages/AboutPage'

export const App = () => {
    // Global State variable is 'feedback' variable
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        // <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                {/* <AboutIconLink /> */}
            </div>
        </Router >
        // </FeedbackProvider>
    )
}