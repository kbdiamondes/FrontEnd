import * as React from 'react';

type Colors = {
    id: number, 
    color: string, 
    code:string
}

type GridProps = {
    randomNumbers:number[]
}

export default function RepeatColor(props:GridProps){
    const latestColor: Colors[] = []

    function InsertColors(num:number){
        let content:Colors; 
        if(num == 1)
            content = {id:1, color:"Violet", code:"#911db1"};
        else if(num == 2)
            content = {id:2, color:"Pink", code:"#ef32e4"};
        else if(num == 3)
            content = {id:3, color:"Red", code:"#e51848"};
        else if(num == 4)
            content = {id:4, color:"Yellow", code:"#fcdf16"};
        else if(num == 5)
            content = {id:5, color:"Orange", code:"#f58130"};
        else if(num == 6)
            content = {id:6, color:"Blue", code:"#4162d6"};
        else if(num == 7)
            content = {id:7, color:"Skyblue", code:"#42d2f2"};
        else if(num == 8)
            content = {id:8, color:"Light Green", code:"#bded42"};
        else
            content = {id:9, color:"Green", code:"#3cb249"};

        latestColor.push(content); 
    }


    function MakeNewColors(colors:number[]){
        {colors.map(n=>InsertColors(n))}
    }


    MakeNewColors(props.randomNumbers); 
    return(
        <div className="squaresGrid">
            {latestColor.map((color)=>
                <div key={color.id} style={{backgroundColor: color.code}} className="squares"></div>
            )}
        </div>
    ); 


}