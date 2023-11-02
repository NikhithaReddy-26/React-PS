import {SxProps, TextFieldVariants,TextField}from "@mui/material"
import { ChangeEvent } from "react";

interface TextfieldProps{
    id?:number;
    label?:string;
    required?: boolean;
    varaint?:TextFieldVariants
    onChange?:(event:ChangeEvent<HTMLInputElement>)=>void;
    sx?:SxProps;
    type:"number";
    style?:React.CSSProperties;
    error?:boolean;
    value?:number;
}


const Input = ({id,label,required,varaint,onChange,sx,type,style,error,value}:TextfieldProps) => {
   return(
    <TextField
     label={label}
     value={value}
     required={required}
     variant={varaint}
     onChange={onChange}
     sx={sx}
     type={type}
     style={style}
     error={error}
 
     />
    
   );
};
export default Input;