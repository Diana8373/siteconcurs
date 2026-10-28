
import './App.css'
import Wel from './welcomepage/welcome.jsx'
import Info from './Info/info.jsx'
import Test from './test/test.jsx'
import Tehno from './Tehno/tehno.jsx'
import Scoala from './scoala/scoala.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcomepage" element={<Wel/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/tehno" element={<Tehno/>}/>
        <Route path="/scoala" element={<Scoala/>}/>
      </Routes>
    </Router>
  );
}

export default App
