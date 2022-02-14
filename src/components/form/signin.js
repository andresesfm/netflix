import React, { useState, useContext } from 'react';
import * as ROUTES from '../../constants/routes';
import { Input, Title, Container, Base, Error, Text, Link, Submit } from './styles/form'

const Form = ({ children, title, handleSignin, error, setError, ...restProps }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isInvalid = password === '' || email === ''


    return (<Container {...restProps}>
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
    </Container>);
};



export default Form;
