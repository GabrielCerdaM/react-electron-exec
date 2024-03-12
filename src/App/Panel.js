import { useContext } from "react";

export default function Panel({ title, children }) {
    return (
        <section>
            {children}
        </section>
    )
}