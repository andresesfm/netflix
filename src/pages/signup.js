import React from 'react';
import { Footer, SignupForm, Header } from '../components';
import { FirebaseContext } from '../../context/firebase'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const { auth } = useContext(FirebaseContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
            })
            .then(() => {
                navigate(ROUTES.BROWSE)
            }).catch((error) => {
                setFirstName('')
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }
    return <>
        <Header >
            <SignupForm
                title='Sign Up'
                handleSignup={handleSignup}
                error={error} />
        </Header>
        <Footer />
    </>;
};

export default Signup;
