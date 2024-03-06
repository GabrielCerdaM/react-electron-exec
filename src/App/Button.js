export default function Button({ children, disabled, onClick }) {
    const { ThemeContext } = require("./Context/context");
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
