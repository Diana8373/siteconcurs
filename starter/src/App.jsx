
import './App.css'
import Wel from './welcomepage/welcome.jsx'
import Info from './Info/info.jsx'
import Test from './test/test.jsx'
import Tehno from './Tehno/tehno.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcomepage" element={<Wel/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/tehno" element={<Tehno/>}/>
      </Routes>
    </Router>
  );
}

export default App
