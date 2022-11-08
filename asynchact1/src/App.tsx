import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheAppBar from './components/TheAppBar';
import GadgetCard, { CardDetails } from './components/GadgetCard'; 

const Cards:CardDetails[] = [
  {title:'iPhone 14', subheader:'September 16, 2022', image:'/images/iphone14.jpg', description:'Iphone 14 is the newest launch', alt:'Iphone 14', letter:'I'},
  {title:'Poco X3 Pro', subheader:'May 22, 2021', image:'/images/pocox-3-pro.png', description:'POCO X3 Pro has a new and improved look with a reflective chroma strip in the center and metallic texture on the sides.', alt:'Poco X3 Pro', letter:'R'}
]
function App() {
  return (
    <div className="App">
        <TheAppBar head={'GoTechLink - Latest Gadget Finds!'} />
        { Cards.map((item, i)=>
            <GadgetCard key={i} title={item.title} subheader={item.subheader} image = {item.image} description = {item.description} alt = {item.alt} letter = {item.letter}/>
        )}
    </div>
  );
}

export default App;
