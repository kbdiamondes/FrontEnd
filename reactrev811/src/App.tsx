
import './App.css';
import ShowApp from './Components/CompOne';
import ShowAppTwo from './Components/CompTwo';

const handlerOne = () => {
  alert(1)
}
function App() {
  return (
    <div className="App">
        <ShowAppTwo>
          <ShowApp header='Camera' clickEvent={handlerOne}/>
        </ShowAppTwo>
    </div>
  );
}

export default App;
