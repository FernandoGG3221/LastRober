import './assets/css/App.css';
import Dates from './components/Dates';
import Lastrober from './components/LastRober';
import SafeDays from './components/SafeDays';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Seguimiento</h1>

        {SafeDays(7,2,2022)}
        <h1>Fecha actual: {Dates()}</h1>
        <Lastrober/>
      </header>
        
    </div>
    
  );
}

export default App;
