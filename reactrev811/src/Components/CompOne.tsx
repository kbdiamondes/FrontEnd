import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type CompDetails = {
    header: string; 
    clickEvent: () => void; 
}




export default function ShowApp(props:CompDetails){
    const[key, setKeyCode] = useState('')

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyCode(event.target.value)
    }

    const handlerSubmit = () => {
        if(key==="563"){
            alert("Welcome")
        }else{
            alert("Incorrect!")
        }
    }

    return (
        <Box sx={{margin:'1rem', padding:'1rem'}}> 
            <h2>{props.header}</h2>
            <div><input value={key} onChange={handlerChange}/></div>
            <Button sx={{padding:'1rem', margin:'1rem'}}variant='contained' onClick={handlerSubmit}>Click me</Button>
            <div>{key}</div>
        </Box>

        
    ); 
}