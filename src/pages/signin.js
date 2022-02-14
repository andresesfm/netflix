import React from 'react';
import { Footer, SigninForm, Header } from '../components';
import { FirebaseContext } from '../../context/firebase'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const [error, setError] = useState('')
    const { auth } = useContext(FirebaseContext)
    const navigate = useNavigate()
    const handleSignin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(ROUTES.BROWSE)
            }).catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }
    return <>
        <Header >
            <SigninForm
                title='Sign in'
                handleSignin={handleSignin}
                error={error} setError={setError} />
        </Header>
        <Footer />
    </>;
};

export default Signin;
