export interface ImageProps {
    src?:string;
    alt?:string;
    height?:string;
    width?:string;
}

export const Image =({src,alt,height,width}:ImageProps)=>{
    return (
<img src={src} alt={alt}
      height={height}
      width={width}/>
    )
}