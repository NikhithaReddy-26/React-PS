import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
import Input from "../Inputfield";
  
  export const OperandSelect = () => {
    const [operand, setOperand] = useState<string>("");
    const [first, setFirstOperand] = useState<number>(0);
    const [second, setSecondOperand] = useState<number>(0);
    const [result, setResult] = useState<number>();
  
    const handleChange = (event: SelectChangeEvent) => {
      const operation = event.target.value;
      setOperand(event.target.value );  
  }
    useEffect(()=>{
      switch (operand) {
          case "-":
            const minus = first - second;
            setResult(minus);
            break;
          case "+":
            const adding = first+ second;
            setResult(adding);
            break;
          case "/":
            const output = first / second;
            setResult(output);
            break;
          case "*":
            const prod = first * second;
            setResult(prod);
            break;
            
          default:
            console.log("no operation");
            break;
        }
    },[first,second,operand]);
  const handleChangeTwo= (event:any) =>{
      setSecondOperand(event.target.valueAsNumber);
  }
    console.log(operand);
    console.log(first, second);
    return (
      <>
        <Input
          type={"number"}
          value={first}
          onChange={(e) => setFirstOperand(e.target.valueAsNumber)}
          
        />
        <Input
          type={"number"}
          value={second}
          onChange={handleChangeTwo}
        />
        <Box sx={{ minWidth: 120 }} paddingTop={"20px"}>
          <FormControl fullWidth>
            <InputLabel id=""></InputLabel>
            <Select value={operand}  onChange={handleChange}>
              <MenuItem value={"-"}>-</MenuItem>
              <MenuItem value={"+"}>+</MenuItem>
              <MenuItem value={"/"}>/</MenuItem>
              <MenuItem value={"*"}>*</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Input type={"number"} value={result} />
      </>
    );
  };