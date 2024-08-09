import './App.css'
import Navbar from './components/Navbar';
import StateProvider from './context/StateProvider'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import TournamentEntry from './pages/TournamentEntry';
import Footer from './components/Footer';
import TournamentBracket from './pages/TournamentBracket';
function App() {
  return (
    <StateProvider>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/forgot-password' element={<ForgotPassword/>}/>


          <Route exact path='/join-tournament' element={<TournamentEntry/>}/>
          <Route exact path='/tournament-bracket/:id' element={<TournamentBracket/>}/>
        </Routes>
        <Footer/>
      </Router>
    </StateProvider>
  )
}

export default App
