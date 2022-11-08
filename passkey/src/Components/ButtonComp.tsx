import {Button } from "@mui/material";

type ButtonProps=  {
    keyNum: number;
    value:string;
    clickEvent: () => void
}

export default function ButtonNum(props:ButtonProps) {
    return (
            <Button variant='contained' style={{padding:'1rem'}} onClick = {props.clickEvent} value={props.value}>{props.keyNum}</Button>
    ); 
}