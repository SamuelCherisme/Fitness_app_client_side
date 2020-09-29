import { useAuth0 } from "@auth0/auth0-react";
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
// import SignUpForm from './components/SignupForm/SignUpForm'
// import Login from './components/Login/Login-button'
// import Logout from './components/Logout/logout-button'
// import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth0Profile from './components/Auth0/Auth0Profile'
// import LogInForm from './components/Login/Login-button';


export default function App(props) {

  let history = useHistory();

  const [enter, updateEnter] = useState(false);

  
  const handleEnter = event => {
    event.preventDefault();
    updateEnter(true);
    history.push('/home')
  }

  return (
    <Layout>
      

      <NavBar/>
      <div className="body">
        <Switch>
          
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
              return <Auth0Profile />;
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
