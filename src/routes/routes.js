import { createHashRouter } from "react-router-dom";
import CreateContract from "../Modules/contracts/CreateContract";
import ContractModule from "../Modules/contracts/ContractModule";
import List from "../Modules/contracts/List";
export const routes = createHashRouter([
  {
    path: "/",
    element: <ContractModule />,
    children: [
      {
        path: "/",
        element: <CreateContract />,
      },
      {
        path: "/view",
        element: <List />,
      },
    ],
  },
]);
