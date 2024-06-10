import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import TimeRange from './pages/TimeRange';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route  path='/' element={<TimeRange />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
