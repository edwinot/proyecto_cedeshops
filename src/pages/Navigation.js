import {Route, Routes} from 'react-router-dom';
import { Checkout } from './Checkout';
import { Home } from './Home';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';
import { Products } from './Products';
import { Profile } from './Profile';
import { Signup } from './Signup';



export const Navigation = () => (
    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/products/:idShop" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element = {<PageNotFound />} />

    </Routes>
);