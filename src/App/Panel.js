import { useContext } from "react";

export default function Panel({ title, children }) {
    const { ThemeContext } = require("./Context/context");
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            {children}
        </section>
    )
}