import './App.css';
import PassKeyPad from './Components/PassKey';




function App() {
  return (
    <div className="App">
        <PassKeyPad/>
    </div>
  );
}

export default App;
















/*
const handlerChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)

  var x = event.target.value 
  var y = '256'
  if(x!==y){
    alert('Error!')
  }
}


const submitPassword = (event:React.ChangeEvent<HTMLFormElement>) => {
  var x = event.target.value 
  var y = '256'
  if(x!==y){
    alert('Error!')
  }
}


const handlerSubmit = async(event: FormEvent<HTMLFormElement>)=>{
  event.preventDefault()
  
  const {num} = event.target as typeof event.target & {
    num: {value:number}
  }

  alert(num.value)
}*/