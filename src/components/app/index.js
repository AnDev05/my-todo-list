import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import LandingPage from '../landing';
import SignInPage from '../signin';
import SignUpPage from '../signup';
import PasswordForgetPage from '../passwordforget';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';
import Navigation from '../navigation';

import * as ROUTES from '../../constants/routes'

const App = () => (
  <Router>
    <Navigation />
    <hr/>
  </Router>
);

export default App;