import React, { useState, useContext } from 'react';
import * as ROUTES from '../../constants/routes';
import { Input, Title, Container, Base, Error, Text, TextSmall, Link, Submit } from './styles/form'
import { FirebaseContext } from '../../context/firebase'
import { useNavigate } from 'react-router-dom'
const Form = ({ children, title, ...restProps }) => {
    const { firebase, firestore, auth } = useContext(FirebaseContext)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || email === '' || firstName === ''
    const handleSignin = (e) => {
        e.preventDefault();
        console.log(auth, firestore);
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

    return <Container {...restProps}>
        <Title>{title}</Title>
        {error && <Error>{error}</Error>}
        <Base onSubmit={handleSignin} >
            <Input placeholder='First Name'
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
            />
            <Input placeholder='Email address'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <Input placeholder='Password'
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <Submit disabled={isInvalid} type='submit'> Sign Up</Submit>
        </Base>
        <Text>
            Already have a Netflix account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </Text>
    </Container>;
};



export default Form;