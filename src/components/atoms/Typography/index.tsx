import { SxProps, Typography } from "@mui/material";

export interface TypographyProps {
    children?:string | number;
    variant?: "h1" | "h2" | "body1";
    sx?:SxProps;
}
export const TypographyComponent=({children,variant,sx}:TypographyProps)=>{
    return(
        <Typography variant={variant} children={children} sx={sx}/>
    )
}