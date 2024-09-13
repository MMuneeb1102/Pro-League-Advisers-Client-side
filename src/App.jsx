import './App.css'
import Navbar from './components/Navbar';
import StateProvider from './context/StateProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import TournamentLists from './pages/TournamentLists';
import RestrictNavigation from './components/RestrictNavigation';
import MyTournaments from './pages/MyTournaments';
import PrivateMatch from './pages/PrivateMatch';
import GameSection from './pages/GameSection';
import Profile from './pages/Profile';

function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const token = cookies.get('auth-token');
  const AuthSignin = RestrictNavigation(Signin);
  const AuthSignup = RestrictNavigation(Signup);
  const AuthTournamentEntry = AuthRoute(TournamentEntry);
  const AuthTournamentBracket = AuthRoute(TournamentBracket);
  const AuthPrivateMatch = AuthRoute(PrivateMatch);
  const AuthProfile = AuthRoute(Profile);

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
          <Route exact path='/forgot-password' element={<ForgotPassword/>}/>

          <Route exact path='/' element={<Home/>}/>

          <Route exact path='/games' element={<GameSection/>}/>
          <Route exact path='/tournaments' element={<TournamentLists/>}/>
          <Route exact path='/myprofile' element={<AuthProfile/>}/>
          <Route exact path='/mytournaments' element={<MyTournaments/>}/>
          <Route exact path='/join-tournament/:id' element={<AuthTournamentEntry/>}/>
          <Route exact path='/tournament-bracket/:id' element={<AuthTournamentBracket/>}/>
          {/* <Route exact path='/tournament/match/:id' element={<AuthPrivateMatch/>}/> */}
          <Route exact path='/tournament/match' element={<AuthPrivateMatch/>}/>
        </Routes>
        <Footer/>
      </Router>
    </StateProvider>
  )
}

export default App
