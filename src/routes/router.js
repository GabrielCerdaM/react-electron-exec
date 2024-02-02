import {
    createHashRouter,
} from "react-router-dom";
import Login from "../Components/Module/Login";
import Contract from "../Components/Module/Contract";

export const router = createHashRouter([
    {
        path: "/",
        element: <Contract/>,
    },
    {
        path:"login",
        element: <Login/>,
    },
    {
        path:"/contract",
        element: <Contract/>
    }
]);

