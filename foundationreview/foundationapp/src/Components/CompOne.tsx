import React, { useState } from 'react';
import {Box, Button, TextField} from '@mui/material'
type cons1 = {
 title:string; 
 date:string; 
 status:string; 
}



export default function CustomApp(){ 
    const [type, setTypeKey] = useState(''); 
    let UserRead = type; 
    let PassRead = type; 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

    const ButtonClick = () => {
        console.log({type})
        validUser(username, password)
    }

    const UserArea = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTypeKey(event.target.value); 
        setUsername(event.target.value); 
        UserRead = type; 
    }

    const PassArea = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTypeKey(event.target.value); 
        setPassword(event.target.value); 
        PassRead = type; 
    }

    function validUser(user:string, password: string){
        if (user === "admin" && password === "admin"){
            alert("Login success!"); 
            setUsername(''); 
            setPassword('');
        }else{
            alert("Invalid user!");
            setUsername(''); 
            setPassword('');
        }
    }

    return(
       
        <Box>
            <TextField label = "Username" sx={{mt:5}} onChange={UserArea} value={username}></TextField><br/>
            <TextField label = "Password" sx={{mt:2}} onChange={PassArea} value={password}></TextField><br/>
            <Button variant="contained" onClick = {ButtonClick} sx={{mt:2}} >Click Me!</Button><br/>
            <Box sx={{mt:5}}>Input Reader: {username}  {password} </Box>
        </Box>
    );  
}