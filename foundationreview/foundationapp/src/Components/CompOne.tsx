import React, { useState } from 'react';
import {Box, Button, TextField} from '@mui/material'
type cons1 = {
 title:string; 
 date:string; 
 status:string; 
}



export default function CustomApp(){ 
    const [type, setTypeKey] = useState(''); 
    let read = type; 
    const [username, setUsername] = useState(''); 

    const ButtonClick = () => {
        console.log({type})
        validUser(username)
    }

    const TextArea = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTypeKey(event.target.value); 
        setUsername(event.target.value); 
        read = type; 
    }

    function validUser(user:string){
        if (user === "admin"){
            alert("Login success!"); 
        }else{
            alert("Invalid user!");
            setUsername(''); 
        }
    }

    return(
       
        <Box>
            <TextField label = "Username" sx={{mt:5}} onChange={TextArea}></TextField><br/>
            <Button variant="contained" onClick = {ButtonClick} sx={{mt:2}} >Click Me!</Button><br/>
            {read}
        </Box>
    );  
}