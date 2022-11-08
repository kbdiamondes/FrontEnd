import {Button, Stack, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import ButtonNum from './ButtonComp';

export default function PassKeyPad() {
  const[pincode, setPinCode] = useState('')
  let buttonVal="";

  
  const handlerClickOne = () => {
    buttonVal = buttonVal + 1; 
    console.log(buttonVal); 
  }

  const handlerClickTwo = () => {
    buttonVal = buttonVal + 2; 
    console.log(buttonVal)
  }
  
  const handlerClickThree = () => {
    buttonVal = buttonVal + 3; 
    console.log(buttonVal)
  }

  
  const handlerClickFour = () => {
    buttonVal = buttonVal + 4; 
    console.log(buttonVal) 
  }

  const handlerClickFive = () => {
    buttonVal = buttonVal + 5; 
    console.log(buttonVal) 
  }

  const handlerClickSix = () => {
    buttonVal = buttonVal + 6; 
    console.log(buttonVal) 
  }

  const handlerClickSeven = () => {
    buttonVal = buttonVal + 7; 
    console.log(buttonVal) 
  }

  const handlerClickEight = () => {
    buttonVal = buttonVal + 8; 
    console.log(buttonVal) 
  }

  const handlerClickNine = () => {
    buttonVal = buttonVal + 9; 
    console.log(buttonVal) 
  }


  const handleClick=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    if(pincode===buttonVal){
      alert('Pass Key Correct!')
    }else{
      alert('Wrong')
    }

  }

  return (
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
          <h3>Pass Key</h3>
        <TextField
          required
          id="outlined-required"
          label="Input Passkey"
          value={pincode}
          onChange={(e)=>setPinCode(e.target.value)}
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
      
      <div style={{margin:'1rem'}}>
      <Stack gap={1}>
        <Stack spacing={{xs:2}} direction="row" justifyContent="center">
          <Button  color="success" 
            variant='contained'
            sx={{maxWidth: '550px', maxHeight: '150px', minWidth: '208px', 
            minHeight: '30px', padding: '1rem'}} 
            onClick={(handleClick)}
            >CHECK</Button>
      </Stack>

    </Stack>

    
    </div>
    {pincode}
      

 
    </Box>

    

    
    

  );
}
/*
export default function PassKeyPad(props:PKComponent) {
  return (
    <Box
      justifyContent="center"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
     
      
    >


      <Stack gap={1}>
        <Stack spacing={{xs:1, sm:1}}direction="row" justifyContent="center">
            <Button variant='contained' style={{padding:'1rem'}} onClick={props.clickEvent}>1</Button>
            <Button variant='contained' value='2'>2</Button>
            <Button variant='contained'>3</Button>
        </Stack>
        <Stack spacing={{xs:1, sm:1}} direction="row" justifyContent="center">
            <Button variant='contained' style={{padding:'1rem'}}>4</Button>
            <Button variant='contained'>5</Button>
            <Button variant='contained'>6</Button>
        </Stack>
        <Stack spacing={{xs:1, sm:1}} direction="row" justifyContent="center">
            <Button variant='contained' style={{padding:'1rem'}}>7</Button>
            <Button variant='contained'>8</Button>
            <Button variant='contained'>9</Button>
        </Stack>
        
      </Stack>
      

 
    </Box>

    

  );
}
*/