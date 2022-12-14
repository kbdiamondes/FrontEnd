import React, { useState } from "react";




export default function UseStatePractice(){
const [number, setNumber]  =useState<number[]>([]);
const [tempval , setTempVal] = useState(''); 
const [user, setUser] = useState(''); 

const incrementNum = () =>{
    setNumber([...number, number.length + 1]) ;
}

const addString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempVal(event.target.value); 
}

const AddUser = () => {
    setUser(tempval); 
}

    return(
        <div>
            <h1>Array Sample</h1>
            <button onClick={incrementNum}>Addition</button>
            <p>{number}</p>

            <h2>Add User</h2>
            <input onChange={addString}></input>
            <button onClick={AddUser}>Add User</button>
            <p>{user}</p>



        </div>
    ); 


}