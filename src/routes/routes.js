import { createHashRouter } from "react-router-dom";
import ContractModule from "../Modules/contracts/ContractModule";
import List from "../Modules/contracts/List";
import { loaderContract } from "../Modules/contracts/utils/loaderContract";
import CreateContract from "../Modules/contracts/CreateContract";
import Contract from "../Modules/contracts/Contract";
export const routes = createHashRouter([
  {
    path: "/",
    element: <ContractModule />,
    children: [
      {
        path: "/",
        element: <List />,
        loader: loaderContract,
      },
      {
        path: "/contract/:contractId",
        element: <Contract />,
      },
      {
        path: "/contract",
        element: <CreateContract />,
      },
    ],
  },
]);
