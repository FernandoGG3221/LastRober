import './assets/css/App.css';
import Dates from './components/Dates';
import SafeDays from './components/SafeDays';

function App() {
  return (
    <div>
        {SafeDays(7,2,2022)}
        <Dates/>
    </div>
    
  );
}

export default App;
