import { useState } from "react"

const useToken = () => {
    const [token, setToken] = useState(true);

    const login = async (email, password) => {
        try {
            const resp = await window.api.login(email, password);
            if (resp) {
                setToken(true)
            }
        } catch (error) {
            console.log({ error });
        }
    }

    return { token, login }
}

export default useToken;