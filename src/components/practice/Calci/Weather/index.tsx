import { Select, MenuItem, SelectChangeEvent, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { Inputfield } from "../Inputfield"
import { useEffect, useState } from "react";

export const WeatherCOnverter =()=>{
    const [first,setFirst]= useState<number>(0);
    const [output,setOutput]= useState<number>();
    const [operand,setOperand]= useState<string>("");
    const handleMenu=(e:SelectChangeEvent)=>{
        setOperand(e.target.value)
    }
    useEffect(()=>{
        switch(operand){
            case "C":
                const celofar = (first - 32) * 5/9
                setOutput(celofar);
                break;
            case "F":
                const fartocel = first * (9/5) + 32
                setOutput(fartocel);
                break;
            default:
                console.log("no operand is choosen");
                break;
        }
        
    },[first,operand])
    return(
        <>
        <Inputfield placeholder="ENter any digit" type="number" value={first} onChange={(e)=>{setFirst(e.target.valueAsNumber)}}/>
        <RadioGroup
    onChange={handleMenu}
  >
    <FormControlLabel value="C" control={<Radio />} label="C" />
    <FormControlLabel value="F" control={<Radio />} label="F" />
  </RadioGroup>
        <Inputfield placeholder="result" type="number" value={output} />
        </>
    )
}