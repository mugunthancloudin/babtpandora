import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Test from './components/test';
import Home from './components/landingPage/home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<LandingPage/>}/>
      {/* <Route path='/' element={<Test/>}/> */}
      {/* <Route path='/' element={<Home/>}/> */}

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
