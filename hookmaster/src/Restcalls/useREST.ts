import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export interface INewNote{
    id:string,
    note: string
}

export interface INotes{
    id:number,
    notes: string[][]
}
export interface IUser{
    id:number,
    firstname:string,
    lastname:string
}

export const useRest = ():[(inewNote:INewNote)=>void,(iuser:IUser)=>void, (config: AxiosRequestConfig<any>)=>void, INotes|undefined, 
    boolean, string, IUser|undefined, INewNote|undefined] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data,setData] = useState<INotes>();
    const [user,setUser] = useState<IUser>();
    const [newNote,setNewNote] = useState<INewNote>();

    function sendRequest(config: AxiosRequestConfig<any>){
        setLoading(true);

        axios(config)
        .then((response) => {
            setError('');
            setData(response.data);
            console.log(data);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setLoading(false))
    }

    function newUser(iuser:IUser){
        setLoading(true);
        axios.post("http://hyeumine.com/newuser.php",new URLSearchParams({
            firstname:iuser.firstname,
            lastname:iuser.lastname
        })
        )
        .then((response)=>{
           setUser(response.data);
        })
        .catch((error)=>{
            setError(error.message);
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    function newPost(inewNote:INewNote){
        setLoading(true);
        axios.post("http://hyeumine.com/newnote.php",new URLSearchParams({
            id:inewNote.id,
            note: inewNote.note
        })
        )
        .then((response)=>{
           setNewNote(response.data);
        })
        .catch((error)=>{
            setError(error.message);
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    return [newPost,newUser,sendRequest, data, loading , error, user, newNote]
}
