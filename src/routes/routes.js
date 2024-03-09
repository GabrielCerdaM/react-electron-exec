import { createHashRouter } from "react-router-dom";
// import ContractModule from "../Modules/contracts/ContractModule";
import CreateContract from "../Modules/contracts/CreateContract";
import ContractEdit from "../Modules/contracts/ContractEdit";
import { Documents } from "../Modules/documents/Documents";
import Payment from "../Modules/payment/Payment";
import MyApp from "../App/MyApp";
import List from "../Modules/contracts/List";

export const routes = createHashRouter([
  {
    path: "/",
    element: <MyApp />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/contract",
        element: <List />,
      },
      {
        path: "/contract/create",
        element: <CreateContract />,
      },
      {
        path: "/contract/:contractId",
        element: <ContractEdit />,
      },
      {
        path: "/document/:contractId",
        element: <Documents />,
      },
      {
        path: "/payment/:contractId",
        element: <Payment />,
      },
    ],
  },
]);
