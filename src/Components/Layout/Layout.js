import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <div className="h-full">
                <Navbar />
                {children}
            </div>
        </>
    );
}