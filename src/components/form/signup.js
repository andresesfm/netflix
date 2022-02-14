import React, { useState, useContext } from 'react';
import * as ROUTES from '../../constants/routes';
import { Input, Title, Container, Base, Error, Text, Link, Submit } from './styles/form'

const Form = ({ children, title, error, handleSignup, ...restProps }) => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || email === '' || firstName === ''


    return <Container {...restProps}>
        <Title>{title}</Title>
        {error && <Error>{error}</Error>}
        <Base onSubmit={handleSignup} >
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