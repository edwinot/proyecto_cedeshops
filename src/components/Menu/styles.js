import styled from "styled-components"
import {BOTTOM_MENU_HEIGTH, Theme} from "../../themes/theme";

export const MenuWrapper = styled.section`
    border-top: 2px solid #ccc;
    position: fixed;
    width: 100%;
    height: ${BOTTOM_MENU_HEIGTH}px;
    background-color: #fff;
    display: flex;
    bottom: 0;
    left: 0;
    //border: 1px solid red;
    a{
        flex:1;
        text-decoration: none;
    }
`;

export const ItemMenuWrapper = styled.div `
    border-left: 1px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    svg {
        color: ${Theme.secoundary};
        font-size: 1.5em;
    }
    p {
        color: ${Theme.secoundary};
        font-weight:300;
        font-size: 0.85em;
    }
    &:hover {
        background-color: ${Theme.secoundary};
        svg {color: #fff}
        p {color:#fff}
    }
`;