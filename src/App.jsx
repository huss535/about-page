import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import '@mui/material/styles';
import './App.css'
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Movies from './pages/Movies';
import Books from './pages/Books';
import NavBar from './components/NavBar';
import Music from './pages/Music';
import FeedbackPage from './pages/FeedbackPage';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 1000, exit: 2000 }} // Define different durations for entering and exiting
        classNames="page"
      >
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/books' element={<Books />} />
            <Route path='/music' element={<Music />} />
            <Route path='/feedback' element={<FeedbackPage />} />
          </Routes>
        </div>
      </CSSTransition>

    </TransitionGroup>
  );
}

function App() {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <BrowserRouter>
      <NavBar onData={handleDataFromChild} />
      {dataFromChild && <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)', /* semi-transparent background color */
        zIndex: 999
      }} >

      </div>}
      <AnimatedRoutes />

    </BrowserRouter>
  );
}

export default App;
