import { useState } from "react";
import { SearchWrapper, SearchInput, SearchClearWrapper } from "./styles";
import {IoClose} from 'react-icons/io5'

export const Search  = ({searchTerm = "", listener}) => {
    
    const [searchText, setSearchText] = useState(searchTerm);

    const handlerChangeText = (event) =>{
        const data = event.target.value;
        setSearchText(data);
        listener(data)
    }

    const clearSearchHandler = () => {
        setSearchText('');
    }

    return (
    
    <SearchWrapper>
        <SearchInput 
            value={searchText} 
            onChange={handlerChangeText} 
            type="text" 
            placeholder="Buscar..."
        />
        <SearchClearWrapper 
            onClick={clearSearchHandler} 
            hasText={searchText !== ""}
        >
            <IoClose />
        </SearchClearWrapper>


    </SearchWrapper>
    );
};