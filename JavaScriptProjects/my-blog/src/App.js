import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">Hello World</div>
      <Home />
    </div>
  );
}

export default App;