import styled from "styled-components";

export const SearchWrapper = styled.section`
    width: 100%;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    //align-items: center;

`;

export const SearchInput = styled.input`
    flex: 1;
    border: 0;
    font-family: "Lato";
    font-weight: 300;
    font-size: 0.95em;
    outline: none;
    padding: 6px 10px;
`;

export const SearchClearWrapper = styled.div`
    padding: 0 4px;
    //border: 1px solid red;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        color: ${ props => props.hasText ? '#222' : '#ccc'};

    }

`;