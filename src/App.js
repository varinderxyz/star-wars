import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Films from './pages/Films';
import Film from './pages/Film';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/film/:id" element={<Film />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
