import { GlobalStyle } from "./globalStyles";
import {BrowserRouter} from 'react-router-dom'

import { Navigation } from "./pages/Navigation";

import {CartContextStore} from "./contexts/CartContext"
import { UserContextStore } from "./contexts/UserContext";


export const App = () => (
  
  <BrowserRouter>
    <UserContextStore>

      <CartContextStore>
        

        <GlobalStyle />
    
        <Navigation />
        
      </CartContextStore>
    </UserContextStore>
    
  </BrowserRouter>
)