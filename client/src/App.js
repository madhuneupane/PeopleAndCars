
import './App.css';
import Title from './components/layout/Title';
import AddPerson from './components/forms/AddPerson';
import AddCar from './components/forms/AddCar';
function App() {
  return (
   <div className='App'>
    <Title />
    <AddPerson />
    <AddCar />
    </div>
  );
}

export default App;
