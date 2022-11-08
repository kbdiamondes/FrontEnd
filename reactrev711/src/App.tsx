import './App.css';
import HelloGuys from './Components/sayHi';
import SuperCard from './Components/SuperCard';
import { CardComponent } from './Components/SuperCard';

const Card:CardComponent[] = [
  {im:'', title:'Hotdog', description:'Virginia hotdog'}
]

function App() {
  return (
    <div className="App">
        <HelloGuys/>
        {Card.map((item,i) =>
          <SuperCard key={i} im={item.im} title={item.title} description={item.description}/>
        )
        }
    </div>
  );
}

export default App;
