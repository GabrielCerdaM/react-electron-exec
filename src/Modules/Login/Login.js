import { useState } from "react";
import useToken from "../../Components/hooks/useToken";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { token, login } = useToken()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ e });
        console.log({ email, password });
        const resp = await login(email, password)
    }

    return <>
        <section className="flex justify-center align-middle w-full">
            <div className="text-center bg-gray-300 pt-12">
                <h1 className="">Iniciar Sesion</h1>
                <p className="text-red-500 text-xs italic pt-2">
                    "Credenciales incorrectas"
                </p>
                <form className="flex flex-col gap-12 p-10 m-5" onSubmit={handleSubmit}>
                    <input className="border border-black p-3 bg-white" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input className="border border-black p-3 bg-white" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className="bg-blue-300 p-3">Login</button>

                </form>
            </div>
        </section>
    </>
}