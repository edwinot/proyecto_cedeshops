import { currencyFormat } from "../../utils/CurrencyFormat";
import { ProductWrapper } from "./styled";
import {Button} from './../../globalStyles'
import { Theme } from "../../themes/theme";

export const Product = ({id, 
    name, 
    price, 
    image, 
    onPress, 
    hasAction, 
    textAction = "",
    }) => (
    <ProductWrapper>
        <img src={image} alt={name} width= "50px" />
        <p>{name}</p>
        <h6>{currencyFormat(price)}</h6>
        {hasAction && (
        <Button onClick={(e) => onPress(id)} bgColor={Theme.secoundary} >
            {textAction}
            </Button>)}
    </ProductWrapper>

);