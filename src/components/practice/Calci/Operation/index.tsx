import { Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Inputfield } from "../Inputfield"
import { useEffect, useState } from "react";

export const Operand =()=>{
    const [first,setFirst]= useState<number>(0);
    const [second,setSecond]= useState<number>(0);
    const [output,setOutput]= useState<number>();
    const [operand,setOperand]= useState<string>("");
    const handleMenu=(e:SelectChangeEvent)=>{
        setOperand(e.target.value)
    }
    useEffect(()=>{
        switch(operand){
            case "+":
                const add = first + second;
                setOutput(add);
                break;
            case "-":
                const remove = first - second;
                setOutput(remove);
                break;
            case "*":
                const multiply = first * second;
                setOutput(multiply);
                break;
            case "/":
                const divide = first / second;
                setOutput(divide);
                break;
            case "c":
                const celofar = (first - 32) * 5/9
                setOutput(celofar);
                break;
            default:
                console.log("no operand is choosen");
                break;
        }
        
    },[first,second,operand])
    return(
        <>
        <Inputfield placeholder="Enter any digit" type="number" value={first} onChange={(e)=>{setFirst(e.target.valueAsNumber)}}/>
        <Inputfield placeholder="ENter any digit" type="number" value={second} onChange={(e)=>{setSecond(e.target.valueAsNumber)}}/>
        <Select value={operand} onChange={handleMenu}>
            <MenuItem value={"*"}>*</MenuItem>
            <MenuItem value={"+"}>+</MenuItem>
            <MenuItem value={"/"}>/</MenuItem>
            <MenuItem value={"-"}>-</MenuItem>
            <MenuItem value={"c"}>c</MenuItem>
        </Select>
        <Inputfield placeholder="result" type="number" value={output} />
        </>
    )
}