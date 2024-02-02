import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Components/Module/Login";
import ErrorPage from "../Components/erros/error-page";
import Contract from "../Components/Module/Contract";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path:"login",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path:"/contract",
        element: <Contract/>
    }
]);

