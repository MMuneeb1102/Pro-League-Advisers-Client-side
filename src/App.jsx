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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { getUser } from './redux/slices/auth/authThunk';
import AuthRoute from './components/AuthRoute';

function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const token = cookies.get('auth-token');
  const AuthSignin = AuthRoute(Signin);
  const AuthSignup = AuthRoute(Signup);

  useEffect(()=>{
    const checkingAuth = async () =>{
      if(token){
        await dispatch(getUser());
      }

    }
    checkingAuth();
  }, [])
  return (
    <StateProvider>
    <Router>
        {(!isLoading || !token) && <Navbar/>}
        <Routes>
          <Route exact path='/signin' element={<AuthSignin/>}/>
          <Route exact path='/signup' element={<AuthSignup/>}/>

          <Route exact path='/' element={<Home/>}/>
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
