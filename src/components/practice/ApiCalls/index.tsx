import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export interface canidates{
    id:number
    name: string
    branch:string
    section:string
}
export const ApiCalls=()=>{
    const [data,setData]=useState<canidates[]>([]);
    useEffect(()=>{
    axios.get("http://localhost:3002/candidates").then((response)=>{setData(response.data)})
    },[])
    return(
        <div>
        {data.map((item:any) => (
          <Box key={item.id}><li>{item.branch}{item.name}</li></Box>
        ))}
      </div>
    );
}