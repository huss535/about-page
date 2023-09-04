import  React  from 'react'
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
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
function App() {

  const AnimatedRoutes = () => {
    const location = useLocation();
  
    return (
      <TransitionGroup >
        <CSSTransition key={location.key} timeout={1000} classNames="page">
          <div >
      

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutMe' element={<AboutMe/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/music' element={<Music/>} />
      <Route path='/feedback' element={<FeedbackPage/>}/>


    </Routes>


          </div>
           
          
        </CSSTransition>
      </TransitionGroup>
    );
  };
  
  
  return (
  <BrowserRouter>
  <NavBar/>
   <AnimatedRoutes/>
  </BrowserRouter>
  );
}

export default App
