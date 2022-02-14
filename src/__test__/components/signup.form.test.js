import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SignupForm } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { MemoryRouter } from 'react-router-dom'

describe('SignupForm is rendered', () => {
    it('renders as expected with data', () => {
        const { container, getByText, getByPlaceholderText } = render(
            <FirebaseContext.Provider value={{ auth: jest.mock() }}>
                <MemoryRouter>
                    <SignupForm title='Sign in' />
                </MemoryRouter>
            </FirebaseContext.Provider>)

        expect(getByPlaceholderText('First Name')).toBeTruthy()
        expect(getByText('Sign Up')).toHaveAttribute('disabled')
        const email = getByPlaceholderText('Email address')
        const pass = getByPlaceholderText('Password')
        const first = getByPlaceholderText('First Name')
        expect(email).toBeTruthy()
        expect(pass).toBeTruthy()
        expect(first).toBeTruthy()
        fireEvent.change(email, { target: { value: 'myemail' } })
        fireEvent.change(pass, { target: { value: 'mypass' } })
        fireEvent.change(first, { target: { value: 'myfirst' } })
        expect(getByText('Sign Up')).not.toHaveAttribute('disabled')



        expect(container.firstChild).toMatchSnapshot();
    })
    // it('Renders and toggles the feature', () => {
    //     const { container, queryByText, getByAltText } = render(<SignupForm slideRows={testSlideRows} category='catt' />)
    //     expect(container).toHaveTextContent('fun cartoon')
    //     expect(container).not.toHaveTextContent('12')
    //     fireEvent.click(queryByText('Sponge Bob'))
    //     expect(container).toHaveTextContent('12')
    //     fireEvent.click(getByAltText('Close'))
    //     expect(container).not.toHaveTextContent('12')
    // })
})