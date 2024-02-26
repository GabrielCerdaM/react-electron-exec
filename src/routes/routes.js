import { createHashRouter } from "react-router-dom";
import ContractModule from "../Modules/contracts/ContractModule";
import List from "../Modules/contracts/List";
import CreateContract from "../Modules/contracts/CreateContract";
import ContractEdit from "../Modules/contracts/ContractEdit";
import { Documents } from "../Modules/documents/Documents";
import Payment from "../Modules/payment/Payment";

export const routes = createHashRouter([
  {
    path: "/",
    element: <ContractModule />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/contract/:contractId",
        element: <ContractEdit />,
      },
      {
        path: "/contract",
        element: <CreateContract />,
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
