import React, { useState, useContext } from 'react';
import * as ROUTES from '../../constants/routes';
import { Input, Title, Container, Base, Error, Text, TextSmall, Link, Submit } from './styles/form'
import { FirebaseContext } from '../../context/firebase'
import { useNavigate } from 'react-router-dom'
const Form = ({ children, title, ...restProps }) => {
    const { firebase, firestore, auth } = useContext(FirebaseContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || email === ''
    const handleSignin = (e) => {
        e.preventDefault();
        console.log(auth, firestore);
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(ROUTES.BROWSE)
            }).catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }

    return <Container {...restProps}>
        <Title>{title}</Title>
        {error && <Error>{error}</Error>}
        <Base onSubmit={handleSignin} >
            <Input placeholder='Email address'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <Input placeholder='Password'
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <Submit disabled={isInvalid} type='submit'> Sign In</Submit>
        </Base>
        <Text>
            New to Netflix? <Link to={ROUTES.SIGIN_UP}>Sign Up</Link>
        </Text>
    </Container>;
};



export default Form;
