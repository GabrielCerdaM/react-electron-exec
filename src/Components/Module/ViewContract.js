import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";
import Files from "../../Input/Files";
import Layout from "../../Layout/Layout";
import Contract from "./CreateContract";
import List from "./List";

export default function ViewContract() {

    return (<>
        <Layout>
            <Link to="contract" >HOLA</Link>
            <Link to="/" >HOLA2222</Link>
            <List />
        </Layout>
    </>)
}