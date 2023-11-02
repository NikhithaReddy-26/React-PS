import { SxProps, TextField } from "@mui/material"
export interface InputfieldProps{
    type?:"number" | "email"|"password" | string;
    placeholder?:string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
    value?:number | string;
    sx?:SxProps;
    helperText?:string;
    error?:boolean
}
export const Inputfield=({type,placeholder,onChange,value,sx, helperText, error}:InputfieldProps)=>{
    return(
        <TextField sx={sx} type={type} placeholder={placeholder} onChange={onChange} value={value} helperText={helperText} error={error}/>
    )
}