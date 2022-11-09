import { Button } from '@mui/material';
import './App.css';
import CoolCard, { CardComp } from './Components/MyCard';
import MyCard from './Components/MyCard';

const Card:CardComp[] = [
  {wordoftheDay: 'Hello World', wordType: 'sentence', wordDefinition: 'hotdog', wordSample: 'Virginia is hotdog'}
]

function App() {
  
  const handlerClick = (event:React.MouseEvent, num:number) => {
    console.log(1);
  }
  
  return (
    
    <div className="App">
      <CoolCard wordoftheDay={'Jollibee'} wordType={'pronoun'} wordDefinition={'Gagibee'} wordSample={'Gagsti Pareh'} />
        {Card.map((item,i) =>
          <MyCard key={i} wordoftheDay={item.wordoftheDay} wordType={item.wordType} wordDefinition={item.wordDefinition} wordSample={item.wordSample}/>
        )}

        <Button onClick={(event)=>{handlerClick(event,120)}}variant='outlined'>Click me</Button>
    </div>
  );
}

export default App;
