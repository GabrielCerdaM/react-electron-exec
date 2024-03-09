import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const handleGetToken = () => {
        return localStorage.getItem('token')
    }

    const handleSetToken = (payload) => {
        if(!payload){
            localStorage.removeItem('token');            
        }else{
            localStorage.setItem('token', payload)
        }
        setToken(payload)
    }

    const login = async (email, password) => {
        const resp = await window.api.login(email, password);
        console.log({ resp });
        if (resp) {
            handleSetToken(true);
            setUser(true)
        }
    }

    const logout = () => {
        handleSetToken(null)
        setUser(null)
    }

    useEffect(() => {
        console.log({ token });
    }, [token])

    return (<>
        <CurrentUserContext.Provider value={{ user, token, login, logout, handleGetToken, handleSetToken }}>
            {children}
        </CurrentUserContext.Provider>
    </>)
}