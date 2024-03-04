import { useState } from "react"

const useToken = () => {
    const [token, setToken] = useState();

    const login = async (email, password) => {
        try {
            const resp = await window.api.login(email, password);
            console.log({ resp });
            return resp;
        } catch (error) {
            console.log({ error });
        }
    }

    return {token, login}
}

export default useToken;