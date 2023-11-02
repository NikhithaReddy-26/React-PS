import { useState } from "react";
import { Inputfield } from "../Calci/Inputfield"
import { UserDetails, details } from "../../../utils/constants/constants";

export const SearchImpl = ()=>{
    const [element, setElement]=useState<string>('');
    const [filterElement, setFilterElement]=useState<UserDetails[]>(details);
    const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const searcTerm = event.target.value.toLowerCase();
        setElement(searcTerm);
        const filtered = details.filter((user)=>(user.email.toLowerCase().includes(searcTerm)));
        setFilterElement(filtered);
    }
    return(
        <>
        <Inputfield value={element} placeholder="enter anything" onChange={handleSearch}/>
        <ol>
            {filterElement.map((element)=>(
                <li key={element.id}>
                    {element.email}{element.password}
                </li>
            ))}
        </ol>
        </>
    )
}