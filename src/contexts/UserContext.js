import {createContext, useState, useContext} from 'react'

const initialState ={
    id:'',
    name: '',
    email: '',
    phone: "",
    isAuthenticated: false,
};

const UserContext = createContext(initialState);

export const UserContextStore = (props) => {

    
    const [user, setUser] = useState(initialState);

    const setAuthenticate = (isAuth) => {
        setUser({...user, isAuthenticated: isAuth});
    }

    const setUserInfo = (userData) => {
        setUser(prevState => ({
            ...prevState,
            ...userData
        }));
         
    }
    
    return (
        <UserContext.Provider value={{user, setAuthenticate, setUserInfo}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUser = () =>useContext(UserContext);