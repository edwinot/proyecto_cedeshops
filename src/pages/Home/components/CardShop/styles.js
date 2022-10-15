import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Theme } from '../../../../themes/theme';

export const CardShopWrapper = styled(Link)`
    margin: 16px 0;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 6px;
    -webkit-box-shadow: 2px 1px 5px 0px rgba(99,99,99,1);
    -moz-box-shadow: 2px 1px 5px 0px rgba(99,99,99,1);
    box-shadow: 2px 1px 5px 0px rgba(99,99,99,1); 
    display: flex; 
    text-decoration: none;
    &:hover{
        background-color: #f6f6f6;
        -webkit-box-shadow: 2px 1px 14px 0px rgba(99, 99, 99, 1);
        -moz-box-shadow: 2px 1px 14px 0px rgba(99, 99, 99, 1);
        box-shadow: 2px 1px 14px 0px rgba(99, 99, 99, 1);
    }
`;

export const CardShopImage = styled.div`
    img {
        width: 80px;
    }
`;

export const CardShopContent = styled.div`
    flex: 1;
    margin: 0 8px;

    h4 {
        margin: 3px 0px;
        font-size: 1.3em;
        color: ${Theme.primary_text};
    }
    p{
        color: ${Theme.primary_text};
    }
    span {
        font-weight: 300;
        color: ${Theme.primary_text};
    }
    
`;