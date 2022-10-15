import { useContext } from 'react';
import { useState } from 'react';
import{createContext} from 'react';

const initialState = {
    quantity:0
};


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext); 



export const CartContextStore = ({children}) =>{



    const [cart, setCart] = useState(initialState);

    const clearCart =() => setCart

    const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

    const removeProduct = (id) =>
	setCart(cart.filter((product) => product.id !== id));
    


    const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};



    const addItemToCart = (idProduct) => {
        setCart((prevState) => ({
            ...prevState,
            quantity: prevState.quantity + 1,
        }));
    };


    return(
        <CartContext.Provider value ={{
            cart, 
            addItemToCart,
            clearCart,
			isInCart,
			removeProduct,
			addProduct,}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);