import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Now from './pages/Now';
import SillyWork from './pages/Silly';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Now" element={<Now />} />
          <Route path="/Silly" element={<SillyWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
