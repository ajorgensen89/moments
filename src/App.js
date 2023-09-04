import './App.css';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Moments.</h1>{' '}
      <Button variant="success">Success</Button>{' '}
    </div>
  );
}

export default App;