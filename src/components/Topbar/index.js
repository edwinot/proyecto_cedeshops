import { LogoWrapper, TopbarWrapper, CartWrapper, CartQuantity } from "./styles";
import {IoCart} from "react-icons/io5";

import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";


export const Topbar = () => {

    const {cart } = useCart();

    return (

    <TopbarWrapper>
        <LogoWrapper>
        
            <img src="/logoapp.png" alt="logo"/>
        
        </LogoWrapper>

        <CartWrapper>
            <Link to={'/checkout'}>
            <IoCart/>
            </Link>
            {
                cart.quantity > 0 && (
                    <CartQuantity>
                         <p>{cart.quantity}</p>
                    </CartQuantity>
                )
        }
        </CartWrapper>
    </TopbarWrapper>
    
)};