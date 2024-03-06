import { Link } from "react-router-dom";

export default function Home({ children }) {
    return (
        <>
            <header className="p-5 text-center bg-emerald-200">
                <ul className="flex flex-row justify-center gap-5">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/contract">Contratos</Link>
                    </li>
                </ul>
            </header>
            <section>
                {children}
            </section>
        </>
    )
}