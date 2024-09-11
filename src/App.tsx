import { HashRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;