import { useContext, useState } from "react";
import { CurrentUserContext } from "../../App/Provider/CurrentUserProvider";

export default function Login() {
    const { login } = useContext(CurrentUserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log({ e });
            console.log({ email, password });
            const resp = await login(email, password)
            if (!resp) {
                setError("Error de acceso");
            }
        } catch (error) {
            console.log({ error });
        }
    }

    return <>
        <section className="flex justify-center w-full pt-36">
            <div className="text-center bg-gray-300 pt-12">
                <h1 className="">Iniciar Sesion</h1>
                <form className="flex flex-col gap-12 p-10 m-2" onSubmit={handleSubmit}>
                    <input className="border border-black p-3 bg-white" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input className="border border-black p-3 bg-white" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <div className="pt-2">
                        <button className="bg-blue-300 w-full py-3">Login</button>
                        {error && (
                            <p className="text-red-500 text-xs italic">Error de credenciales</p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    </>
}