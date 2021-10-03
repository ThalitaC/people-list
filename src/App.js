import './App.css';
import './styles/PeopleList.css';
import './styles/AddPerson.css';
import './styles/Sorter.css';

import PeopleMain from './components/PeopleMain';
import people from './utils/data';

function App() {
  return (
    <div className="App">
      <PeopleMain people={ people }/>
    </div>
  );
}
export default App;
