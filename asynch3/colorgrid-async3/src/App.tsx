import { useState } from 'react';
import './App.css';
import ColorGrid from './Components/ColorGrid';
import GridButtons from './Components/MainGrid';
import "./Components/Styles.css";



export default function App() {
  const [gameCount,setSessionCount]= useState(0);
  let randomNumbers:number[] = randomizer();
  let randomArrangement:number[] = randomizer();

  function randomizer(){
    let n:number[] = [];
    while(n.length < 9){
        let r = Math.floor(Math.random() * 9) + 1;
        if(n.indexOf(r) === -1) n.push(r);
    }
    return n;
  }
  
  return (
    <div className="App">
      <header className="App-header">
            <div className="wrapperCenter">
              <ColorGrid randomNumbers={randomNumbers}/>
              <GridButtons gameCount={gameCount} setSessionCount={setSessionCount} randomArrangement={randomArrangement} randomNumbers={randomNumbers}/>
        </div>
        </header>
    </div>
  );
}



