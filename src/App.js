import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Tutorial/firebase-git/Config/firebaseConfig';

import Home from './Tutorial/firebase-git/pages/Home';
import SignIn from './Tutorial/firebase-git/pages/SignIn';
import SignUp from './Tutorial/firebase-git/pages/SignUp';
import PageNotFound from './Tutorial/firebase-git/pages/PageNotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './Tutorial/firebase-git/context/UserContext';

import Footer from './Tutorial/firebase-git/layout/Footer';
import Header from './Tutorial/firebase-git/layout/Header';

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
