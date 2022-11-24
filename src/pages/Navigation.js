import { useEffect } from "react";
import {Route, Routes, useLocation } from 'react-router-dom';
import { useUser } from "../contexts/UserContext";
import { httpRequest, HTTP_VERBS } from "../utils/HttpRequest";
import { getToken, removeToken } from "../utils/TokenLocalStorage";
import { Home } from './Home';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';
import { Products } from './Products';
import { Profile } from './Profile';
import { Signup } from './Signup';



export const Navigation = () => {

    const {user, setAuthenticate, setUserInfo} = useUser();
    const location = useLocation();
  
    useEffect(() => {
      checkUserSession();
    }, [location]);
  
    const checkUserSession = () => {
      const token = getToken();
      if (token && !user.isAuthenticated) {
        requestGetInfoUser(token);
      }
    }
  
    const requestGetInfoUser = async (token) => {
      try {
        const response = await httpRequest({
          method: HTTP_VERBS.GET,
          endpoint: '/users/info',
          token
        });
        const {data} = response;
        setAuthenticate(true);
        setUserInfo({
          id: data._id,
          name: data.name,
          email: data.email,
          phone: data.phone
        });
      } catch (error) {
        removeToken();
      }
    }
  
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:idShop" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }