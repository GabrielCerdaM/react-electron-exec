import Files from "../../Input/Files";
import Layout from "../../Layout/Layout";
import Contract from "./Contract";
import List from "./List";

export default function View() {

    return (<>
        <Layout>
            {/* <Files/> */}
            <List/>
            <Contract/>
        </Layout>
    </>)
}