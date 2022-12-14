import { Paper } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRest } from "../Restcalls/useREST";


export default function RestExample (){
    const [newPost,newUser,sendRequest, data, loading,error,user,newNote] = useRest();

    useEffect(()=>{
        if(user!==undefined){
            sendRequest(
                {
                method:'GET',
                url:"http://hyeumine.com/mynotes.php?id="+ user.id,
                }
                )
            newPost({id:user.id+"",note:"haha"})
        }
    },[user])

    if(!user) return <><h3>No User Yet!</h3>
        <button onClick={()=>{
            newUser({id:-1,firstname:"Marvin",lastname:"Jesse"})
        }}>Create A New User</button>
    </>

    if(loading) return <p>Checking for data..</p>

    if(error!=="") return <p>Error</p>

    if(!data) return <h2>Data is null!</h2>
    return <div>
        <h4>{user.id} | {user.firstname} | {user.lastname}</h4>
        {
            data.notes.map((item,i)=>{
                return <Paper sx={{margin:'1rem',padding:'.5rem', fontSize:'15px', textAlign:'right'}} elevation={12} key={i}>{item[0]} : {item[1]}</Paper>
            })
        }
    </div>
}