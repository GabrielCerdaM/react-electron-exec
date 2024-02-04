import {
    createHashRouter,
} from "react-router-dom";
import Login from "../Components/Module/Login";
import Contract from "../Components/Module/contracts/Contract";
import Layout from "../Components/Layout/Layout";
import View from '../Components/Module/contracts/View';
export const router = createHashRouter([
    {
        path: "/",
        element: <View />,
    },
    {
        path:"login",
        element: <Login/>,
    },
    {
        path:"contract",
        element: <Contract/>
    },{
        path:"dev",
        element:<Layout><Contract/></Layout>
    }
]);

