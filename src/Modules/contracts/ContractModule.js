import { Outlet } from "react-router-dom";
import Layout from "../../Components/Module/Layout/Layout";

export default function ContractModule() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
