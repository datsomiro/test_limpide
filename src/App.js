import './App.css';
import Table from './Components/Table.js';
import data from './Constants/data.json';

function App() {

  const { close, offexchtradevolumeeex, onexchtradevolumeeex, tradedatetimegmt } = data //destructuring

  return (
    <div className="App">
        <h1>Test Limpide</h1>
        <Table /> 
    </div>
  );
}

export default App;
