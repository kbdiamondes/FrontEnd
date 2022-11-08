import {Button, Stack, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import ButtonNum from './ButtonComp';






export default function PassKeyPad() {
  const[pincode, setPinCode] = useState('')
  const[b1] = useState('1') 
  const[b2] = useState('2') 
  const[b3] = useState('3') 
  const[b4] = useState('4') 
  const[b5] = useState('5') 
  const[b6] = useState('6') 
  const[b7] = useState('7') 
  const[b8] = useState('8') 
  const[b9] = useState('9') 

  
  const handlerClickOne = () => {
    console.log(b1); 
  }

  const handlerClickTwo = () => {
    console.log(b2); 
  }
  
  const handlerClickThree = () => {
    console.log(b3); 
  }

  
  const handlerClickFour = () => {
    console.log(b4); 
  }

  const handlerClickFive = () => {
    console.log(b5); 
  }

  const handlerClickSix = () => {
    console.log(b6); 
  }

  const handlerClickSeven = () => {
    console.log(b7); 
  }

  const handlerClickEight = () => {
    console.log(b8); 
  }

  const handlerClickNine = () => {
    console.log(b9); 
  }


  const handleClick=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    if(pincode==='0'){
      alert('error!')
    }else{
      console.log(pincode)
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
                <ButtonNum keyNum={1} clickEvent={handlerClickOne} value={'b1'}/>
                <ButtonNum keyNum={2} clickEvent={handlerClickTwo} value={'b2'}/>
                <ButtonNum keyNum={3} clickEvent={handlerClickThree}value={'b3'}/>
            </Stack>
            <Stack spacing={{xs:1, sm:1}} direction="row" justifyContent="center">
              <ButtonNum keyNum={4} clickEvent={handlerClickFour} value={'b4'}/>
              <ButtonNum keyNum={5} clickEvent={handlerClickFive} value={'b5'}/>
              <ButtonNum keyNum={6} clickEvent={handlerClickSix} value={'b6'}/>
            </Stack>
            <Stack spacing={{xs:1, sm:1}} direction="row" justifyContent="center" >
                <ButtonNum keyNum={7} clickEvent={handlerClickSeven} value={'b7'}/>
                <ButtonNum keyNum={8} clickEvent={handlerClickEight} value={'b8'}/>
                <ButtonNum keyNum={9} clickEvent={handlerClickNine}value={'b9'}/>
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