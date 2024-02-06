import { createHashRouter } from "react-router-dom";
import ContractModule from "../Modules/contracts/ContractModule";
import List from "../Modules/contracts/List";
import { loaderContract } from "../Modules/contracts/utils/loaderContract";
import Item from "../Modules/contracts/Item";
import CreateContract from "../Modules/contracts/CreateContract";
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
        element: <Item />,
      },
      {
        path: "/contract",
        element: <CreateContract />,
      },
    ],
  },
]);
