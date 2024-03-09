import { useContext, useEffect } from "react";
import Panel from "./Panel";
import Login from "../Modules/Login/Login";
import Home from "../Modules/home/Home";
import { CurrentUserContext } from "./Provider/CurrentUserProvider";

export default function WelcomePanel({ children }) {
    const { token, handleSetToken } = useContext(CurrentUserContext);

    // const token = handleGetToken();

    console.log({ token });

    useEffect(() => {
        const getToken = () => {
            handleSetToken(localStorage.getItem('token'));
        }
        getToken();
        console.log({ token });
    }, [token])

    return (
        <Panel title="Welcome">
            {token ?
                <Home>
                    {children}
                </Home> :
                <Login />
            }
        </Panel>
    );
}