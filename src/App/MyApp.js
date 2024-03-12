import WelcomePanel from './WelcomePanel';
import { Outlet } from 'react-router-dom';
import { CurrentUserProvider } from './Provider/CurrentUserProvider';

export default function MyApp() {


    return (
        <CurrentUserProvider>
            <WelcomePanel>
                <Outlet />
            </WelcomePanel>
        </CurrentUserProvider>
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
