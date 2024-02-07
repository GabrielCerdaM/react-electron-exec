import { Link, Outlet } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <>
      <header className="p-5 flex justify-between bg-emerald-200">
        <h1>Saitamer</h1>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">View</Link>
            </li>
            {/* <li>
              <Link to="/"> Home3</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
}
