import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Service from './components/Servicess/Service'
import Schedule from './components/Schedule/Schedule'
import SignUpForm from './components/SignupForm/SignUpForm'
import Login from './components/Login/Login-button'
import Logout from './components/Logout/logout-button'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
// import LogInForm from './components/Login/Login-button';





export default function App(props) {

  let history = useHistory();

  const [enter, updateEnter] = useState(false);

  const [state, setState] = useState({
    email: '',
    password: '',
    isLogginIn: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  


  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({

      email: '',
      password: '',
      isLoggedIn: false
    });
    history.push('/home');
    localStorage.clear();
  };

  const handleInput = event => {
    setState({ ...state, [event.target.name]: event.target.value });
    
  };

  const handleSignUp = async event => {
    event.preventDefault();
    
    try {
      const response = await axios.post('', {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        

      });
      console.log(response);
      localStorage.token = response.data.token;
      response.data.currentUser = localStorage.setItem('user', JSON.stringify(response.data.currentUser));
      setIsLoggedIn("true");
      updateEnter(true);
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('', {
        email: state.email,
        password: state.password
      });
      localStorage.token = response.data.token;
      response.data.currentUser = localStorage.setItem('user', JSON.stringify(response.data.currentUser));
      setIsLoggedIn(true);
      updateEnter(true);
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };
  const handleEnter = event => {
    event.preventDefault();
    updateEnter(true);
    history.push('/home')
  }

  return (
    <Layout isLoggedIn={isLoggedIn}>
      

      <NavBar isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <div className="body">
        <Switch>
          <Route
            path="/sign-up"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                
                />
              );
            }}
          />
          <Route
            path="/log-out"
            render={(props) => {
              return (
                <Logout isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
              );
            }}
          />
          <Route
            path="/log-in"
            render={(props) => {
              return (
                <Login
                  handleEnter={handleEnter}
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/home"
            render={(props) => {
              return <Home />;
            }}
          />
          {enter === false && <Route
            exact path="/"
            render={(props) => {
              return <Home handleEnter={handleEnter} />;
            }}
          />}
          <Route
            path="/contact-us"
            render={(props) => {
              return <Contact />;
            }}
          />
          <Route
            path="/schedule"
            render={(props) => {
              return <Schedule />;
            }}
          />
          <Route
            path="/service"
            render={(props) => {
              return <Service />;
            }}
          />
         
          <Route
            path="/profile"
            render={props => {
              return <Profile />;
            }}
          />
          <Route
            path="/about"
            render={(props) => {
              return <About/>
            }}
          />
          <Route
            path="/"
            render={(props) => {
              return <Home />
            }}
          />
         
          <Route
            path="/:id"
            render={props => {
              return <Home {...props} />;
            }}
          />

        </Switch>
      </div>
    </Layout>
  );
}
