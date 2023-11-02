import { Button, Stack, Typography } from "@mui/material"
import { Inputfield } from "../Inputfield"
import { useState } from "react"
import { EMAIL_REGEX_PATTERN, details } from "../../../../utils/constants/constants";

export const ValidInput = ()=>{
    const [email,setEmail]= useState<string>('');
    const [password,setPassword]= useState<string>('');
    const[isvalid, setIsvalid]=useState<boolean|undefined>();
   
    const handleDetails=()=>{
        if(details.some((user)=>(user.email === email && user.password === password))){
            setIsvalid(true);
        }
        else{
            setIsvalid(false);
        }
    }
    return(
        <>
        <Stack direction={"column"} spacing={4} width={"500px"}>
        <Inputfield placeholder="enter email" onChange={(e)=>{setEmail(e.target.value)}}  value={email} type="email" helperText={""}/>
        <Inputfield placeholder="enter password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        <Button onClick={handleDetails} children="check details"/>
        {isvalid!==undefined && <Typography children={isvalid ? "valid details" : "invalid details"} color={isvalid ? "green" : "red"} textAlign={"center"} />}
        </Stack>
        </>
    )
}