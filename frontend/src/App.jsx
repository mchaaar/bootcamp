
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import PlayGame from "./pages/PlayGame";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playGame" element={<PlayGame />} />
      </Routes>
    </>
  )
}

export default App;
