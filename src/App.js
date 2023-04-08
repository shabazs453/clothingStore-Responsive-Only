import './App.css';
import LandingPage from './scenes/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app relative">
      <Navbar/>
      <LandingPage/>      
    </div>
  );
}

export default App;
