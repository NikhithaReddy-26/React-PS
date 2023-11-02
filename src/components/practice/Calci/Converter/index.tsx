import { useEffect, useState } from "react"
import { Inputfield } from "../Inputfield"

export const Converter = ()=>{
    const [far,setFar]= useState<number>(33.8);
    const [cel,setCel]= useState<number>(1);
    const fartocel = (value: number)=>{
        setCel(value);
        setFar(value * (9 / 5) + 32);
    }
    const caltofar = (value:number)=>{
        setFar(value);
        setCel((value - 32) * (5 / 9));
    }
    
    return(
        <>
        <Inputfield value={cel} type="number" onChange={(e)=>caltofar(e.target.valueAsNumber)} />
        <Inputfield value={far} type="number" onChange={(e)=>fartocel(e.target.valueAsNumber)}/>
        </>
    )
}