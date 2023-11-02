import { useState } from "react"
import { Inputfield } from "../Inputfield"
import { UserDetails } from "../../../../utils/constants/constants"
export interface searchprops{
    items:UserDetails[];
}
export const SearchWithMap = ({items}:searchprops)=>{
    const [element, setElement] = useState<string>('')
    const [isFound,setIsFound] = useState<boolean>()
    const [filteredelement, setFilteredElement] = useState<UserDetails[]>(items)
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setElement(searchTerm);
        const filtered = items.filter((user)=>(user.email.toLowerCase().includes(searchTerm)));
        setFilteredElement(filtered);

    }
    return(
        <>        
        <Inputfield value={element} onChange={handleSearch} placeholder="ENter anything"/>
        <ol type="1">
            {filteredelement.map((user)=>(
                <li key={user.id}>
                    {user.email} {user.password}
                    </li>
            ))}
        </ol>
        </>

    )
}