import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useRef, useState } from 'react';


const Item = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    width: "100px",
    heigth: "50px",
    marginTop: "5px",
    marginBottom: "5px",
    backgroundColor: "#46988e",
    fontWeight: "bold",
    color: "white",
  }));


type MasterGridProps = {
    gameCount:number;
    setSessionCount: React.Dispatch<React.SetStateAction<number>>
    randomArrangement:number[];
    randomNumbers: number[];
  }
  

  export default function NestedGrid(props:MasterGridProps) {
    let [counter,setCounter] = useState(0);
  
    const button1 = useRef<HTMLButtonElement>(null);
    const button2 = useRef<HTMLButtonElement>(null);
    const button3 = useRef<HTMLButtonElement>(null);
    const button4 = useRef<HTMLButtonElement>(null);
    const button5 = useRef<HTMLButtonElement>(null);
    const button6 = useRef<HTMLButtonElement>(null);
    const button7 = useRef<HTMLButtonElement>(null);
    const button8 = useRef<HTMLButtonElement>(null);
    const button9 = useRef<HTMLButtonElement>(null);
  
    function RepresentRef(val:number){
      let temp = useRef<HTMLButtonElement>(null);
      if(val == 1)
        temp = button1;
      if(val == 2)
        temp = button2;
      if(val == 3)
        temp = button3;
      if(val == 4)
        temp = button4;
      if(val == 5)
        temp = button5;
      if(val == 6)
        temp = button6;
      if(val == 7)
        temp = button7;
      if(val == 8)
        temp = button8;
      if(val ==9)
        temp = button9;
      return temp;
    }  

    const ModifyColor = (event: any) => {
        if(event.target.value == "1") //Violet
          button1!.current!.style.backgroundColor = "#911db1"
        else if(event.target.value == "2") //Pink
          button2!.current!.style.backgroundColor = "#ef32e4"
        else if(event.target.value == "3") //Red
          button3!.current!.style.backgroundColor = "#e51848"
        else if(event.target.value == "4") //Yellow
          button4!.current!.style.backgroundColor = "#fcdf16"
        else if(event.target.value == "5") //Orange
          button5!.current!.style.backgroundColor = "#f58130"
        else if(event.target.value == "6") //Blue
          button6!.current!.style.backgroundColor = "#4162d6"
        else if(event.target.value == "7") //Sky Blue
          button7!.current!.style.backgroundColor = "#42d2f2"
        else if(event.target.value == "8") //Light Green
          button8!.current!.style.backgroundColor = "#bded42"
        else if(event.target.value == "9") //Green
          button9!.current!.style.backgroundColor = "#3cb249"
      }

    function AssessButton(event:any){
        if(props.randomNumbers[counter]==event.target.value)
          setCounter(counter+1) 
        else{
          ResetButtons();
          setCounter(0)
        }
        if(counter==8){
          alert("Congratulations! You've done it!")
          ResetButtons();
          props.setSessionCount(props.gameCount+1)
        }
      }

      function ResetButtons(){
        button1!.current!.style.backgroundColor = "#46988e"
        button2!.current!.style.backgroundColor = "#46988e"
        button3!.current!.style.backgroundColor = "#46988e"
        button4!.current!.style.backgroundColor = "#46988e"
        button5!.current!.style.backgroundColor = "#46988e"
        button6!.current!.style.backgroundColor = "#46988e"
        button7!.current!.style.backgroundColor = "#46988e"
        button8!.current!.style.backgroundColor = "#46988e"
        button9!.current!.style.backgroundColor = "#46988e"
      }

      function BtnOnClick(event:any){
        ModifyColor(event);
        AssessButton(event);
      }

      const DivStyle = {
        paddingTop: "10px",
        alignContent: "center",
        marginRight: "170px",
        marginLeft:  "170px", 
      };

      return (
        <div style={DivStyle}>
          <div className='buttonsGrid'>
          {props.randomArrangement.map(n =>
            <Item key={n} ref={RepresentRef(n)} onClick={BtnOnClick} value={n}>ㅤ</Item>
          )}
          </div>
        </div>
      );
}