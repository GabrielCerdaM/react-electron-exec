import { useContext } from "react";
import Panel from "./Panel";
import Login from "../Modules/Login/Login";
import Greeting from "./Greting";
import Home from "../Modules/home/Home";
export default function WelcomePanel({ children }) {
    const { CurrentUserContext } = require("./Context/context");
    const { token } = useContext(CurrentUserContext);
    console.log({ token });
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