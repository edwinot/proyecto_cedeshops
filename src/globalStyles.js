import styled, {createGlobalStyle} from "styled-components";
import { Theme } from "./themes/theme";

export const GlobalStyle = createGlobalStyle`

    *, ::after, ::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family:"Lato";
    }
`;

export const FormControl = styled.section`
    display: flex;
    flex-direction: column;
    margin: 6px 0;
    span {
        margin-bottom: 6px;
        margin-top: 3px;
        color: red;
        font-weight: 700;
        font-size: 0.88em;

    }
`;

export const FormControLabel = styled.label`
    font-size: 1.05em;
    color: ${Theme.primary_text}
`;

export const FormControlInput = styled.input`
    font-family: "Lato";
    font-size: 1.1em;
    color: ${Theme.primary_text};
    padding: 6px 8px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
`;

export const FormControlAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
`;

export const Button = styled.button`
    width: 100%;
    border-radius: 6px;
    padding: 10px 8px;
    font-family: "Lato";
    color: ${props => props.textColor || "#fff"};
    background-color: ${props => props.bgColor || Theme.primary};
    border-color: ${props => props.borderColor };
    border-style: ${props => props.borderColor ? "solid" : "none"};
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9em;
    opacity: 0.9;
    &:hover {
        opacity: 1;
    }
    &:disabled {
        background-color: #ccc;
        color: ${Theme.primary_text};
        cursor: not-allowed;
    }

`;