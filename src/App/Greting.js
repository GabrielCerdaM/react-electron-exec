import { useContext } from "react";

export default function Greeting() {
    const { CurrentUserContext } = require("./Context/context");
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <p>You logged in as {currentUser}.</p>
    )
}