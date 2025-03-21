import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// we'll import the pages here!
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import AnalysisPage from './pages/AnalysisPage'
import Account from './pages/Account'
import { UserProvider } from './contexts/UserContext'
import PrivateRoute from './components/PrivateRoute'
import LandingPage from './pages/LandingPage'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <div className="min-h-screen gradient-background">
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path="/home" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />
          
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/account" element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          } />
          
        </Routes>
      </Router>
      <Toaster />
    </UserProvider>
    </div>
  )
}

export default App
