import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/layout/Navigation";
import Home from './components/Home';
import Patient from './components/Patient';
import './app.css';

function App() {

  return (
    <div>
        <Navigation />

      <div className="contents">
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/patients' element={<Patient />} ></Route>
          </Routes>
      </div>

    </div>
  )
}

export default App
