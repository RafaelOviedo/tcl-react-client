import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/landingPage/LandingPage'
import Home from './routes/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
