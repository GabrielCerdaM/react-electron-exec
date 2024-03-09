import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../App/Provider/CurrentUserProvider";

export default function Home({ children }) {
    const { handleGetToken, handleSetToken } = useContext(CurrentUserContext);

    const handleLogout = (e) => {
        handleSetToken(false);
        const token = handleGetToken();
        // const logout = localStorage.getItem('token');
        console.log('handleLogout', { e,  token});
    }

    return (
        <>
            <header className="p-5 text-center bg-emerald-200">
                <ul className="flex flex-row justify-between gap-5">
                    <li>
                        <Link to="/contract">Contratos</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                        {/* <Link to="/contract">Contratos</Link> */}
                    </li>
                </ul>
            </header>
            <section>
                {children}
            </section>
        </>
    )
}