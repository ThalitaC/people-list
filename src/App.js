import './App.css';
import './styles/PeopleList.css'

import people from './utils/data';
import PeopleList from './components/PeopleList';

function App() {
  return (
    <div className="App">
      <header><h1>Lista de Pessoas</h1></header>
      <PeopleList people={ people }/>
    </div>
  );
}

export default App;
