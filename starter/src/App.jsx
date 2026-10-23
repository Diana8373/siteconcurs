
import './App.css'
import Wel from './welcomepage/welcome.jsx'
import Info from './Info/info.jsx'
import Test from './test/test.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcomepage" element={<Wel/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App
