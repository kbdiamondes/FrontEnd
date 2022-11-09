import { Box, Stack, TextField } from "@mui/material";
import { useState } from "react";
import ButtonNum from "./ButtonNum";



export default function Bingo() {
    const[bingokey, setBingoKey] = useState('')
    let buttonVal=""
    const handlerClickOne = () => {
        buttonVal = buttonVal + 1; 
        console.log(buttonVal); 
        
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal=""
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      const handlerClickTwo = () => {
        buttonVal = buttonVal + 2; 
        console.log(buttonVal)
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
      
      const handlerClickThree = () => {
        buttonVal = buttonVal + 3; 
        console.log(buttonVal)
        if(buttonVal.includes(bingokey) && buttonVal===bingokey){
            alert("Congratulations")
            buttonVal="";
        }else if(buttonVal.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      
      const handlerClickFour = () => {
        buttonVal = buttonVal + 4; 
        console.log(buttonVal)
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      const handlerClickFive = () => {
        buttonVal = buttonVal + 5; 
        console.log(buttonVal) 
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      const handlerClickSix = () => {
        buttonVal = buttonVal + 6; 
        console.log(buttonVal) 
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      const handlerClickSeven = () => {
        buttonVal = buttonVal + 7; 
        console.log(buttonVal) 
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      const handlerClickEight = () => {
        buttonVal = buttonVal + 8; 
        console.log(buttonVal) 
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }
    
      const handlerClickNine = () => {
        buttonVal = buttonVal + 9; 
        console.log(buttonVal) 
        if(bingokey.includes(buttonVal) && bingokey === buttonVal){
            alert("Congratulations")
            buttonVal="";
        }else if(bingokey.includes(buttonVal) && bingokey !== buttonVal){
        }else{
          alert("Wrong sequence, Try again.");
          buttonVal = "";
        }
      }



    return(
        

        <Box
            justifyContent="center"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            
            
            
            >
                <div style={{margin:'1rem'}}>
                <TextField
                required
                id="outlined-required"
                label="Bingo Time"
                value={bingokey}
                onChange={(e)=>setBingoKey(e.target.value)}
                />
                </div>
 
                <Stack gap={1}>
                            <Stack spacing={{xs:1, sm:1}}direction="row" justifyContent="center">
                                <ButtonNum keyNum={1} clickEvent={handlerClickOne} value={1} />
                                <ButtonNum keyNum={2} clickEvent={handlerClickTwo} value={2}/>
                                <ButtonNum keyNum={3} clickEvent={handlerClickThree} value={3}/>
                            </Stack>
                            <Stack spacing={{xs:1, sm:1}} direction="row" justifyContent="center">
                            <ButtonNum keyNum={4} clickEvent={handlerClickFour} value={4}/>
                            <ButtonNum keyNum={5} clickEvent={handlerClickFive} value={5}/>
                            <ButtonNum keyNum={6} clickEvent={handlerClickSix} value={6}/>
                            </Stack>
                            <Stack spacing={{xs:1, sm:1}} direction="row" justifyContent="center" >
                                <ButtonNum keyNum={7} clickEvent={handlerClickSeven} value={7}/>
                                <ButtonNum keyNum={8} clickEvent={handlerClickEight} value={8}/>
                                <ButtonNum keyNum={9} clickEvent={handlerClickNine} value={9}/>
                            </Stack>
                            
                        </Stack>
                        {bingokey}
                    </Box>

                    
    ); 
}


/*
function concatt9(){
  buttoncode = buttoncode + 9;
  console.log(buttoncode);
  if(passcode.includes(buttoncode) && passcode === buttoncode){
    alert("Congratulations");
    buttoncode = "";
  }
  else if(passcode.includes(buttoncode) && passcode != buttoncode){
    
  }else{
    alert("Wrong sequence, Try again.");
    buttoncode = "";
  }
}

*/