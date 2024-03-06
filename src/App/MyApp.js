import { useContext, useState } from 'react';
import { CurrentUserContext } from './Context/context';
import { ThemeContext } from './Context/context';
import WelcomePanel from './WelcomePanel';
import useToken from '../Components/hooks/useToken';
import { Outlet } from 'react-router-dom';

export default function MyApp() {

    const [theme, setTheme] = useState('light');
    const [currentUser, setCurrentUser] = useState(null);

    const { token, login } = useToken()

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider
                value={{
                    token,
                    login
                }}
            >
                <WelcomePanel>
                    <Outlet />
                </WelcomePanel>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}





// function LoginForm() {
//     const { CurrentUserContext } = require("./Context/context");
//     const { setCurrentUser } = useContext(CurrentUserContext);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
//     return (
//         <>
//             <label>
//                 First name{': '}
//                 <input
//                     required
//                     value={firstName}
//                     onChange={e => setFirstName(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Last name{': '}
//                 <input
//                     required
//                     value={lastName}
//                     onChange={e => setLastName(e.target.value)}
//                 />
//             </label>
//             <Button
//                 disabled={!canLogin}
//                 onClick={() => {
//                     setCurrentUser({
//                         name: firstName + ' ' + lastName
//                     });
//                 }}
//             >
//                 Log in
//             </Button>
//             {!canLogin && <i>Fill in both fields.</i>}
//         </>
//     );
// }
