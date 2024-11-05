import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Toto from './pages/Toto'
import Home from './pages/Home'
import { Link } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/toto")}>Toto</button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toto" element={<Toto />} />
      </Routes>
    </>
  )
}

export default App
