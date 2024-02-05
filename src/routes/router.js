import {
    createHashRouter,
} from "react-router-dom";
import Login from "../Components/Module/Login";
import CreateContract from "../Components/Module/contracts/CreateContract";
import Layout from "../Components/Layout/Layout";
import ViewContract from '../Components/Module/contracts/ViewContract';
export const router = createHashRouter([
    {
        path: "/",
        element: <ViewContract />,
    },
    {
        path:"login",
        element: <Login/>,
    },
    {
        path:"contract",
        element: <CreateContract/>
    },{
        path:"dev",
        element:<Layout><CreateContract/></Layout>
    }
]);

