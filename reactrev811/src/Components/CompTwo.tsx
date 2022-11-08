import { Box } from "@mui/material";

type AppDetails={
    children:React.ReactNode; 
}

export default function ShowAppTwo(props:AppDetails){
    return(
        <Box sx={{padding:'1rem', margin:'1rem'}}>
            {props.children}
        </Box>
    ); 
}