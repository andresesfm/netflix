import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SigninForm } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { MemoryRouter } from 'react-router-dom'

describe('SigninForm is rendered', () => {
    it('renders as expected with data', () => {
        const { container, getByText, getByPlaceholderText } = render(
            <FirebaseContext.Provider value={{ auth: jest.mock() }}>
                <MemoryRouter>
                    <SigninForm title='Sign in' />
                </MemoryRouter>
            </FirebaseContext.Provider>)

        expect(getByText('Sign In')).toBeTruthy()
        expect(getByText('Sign In')).toHaveAttribute('disabled')
        const email = getByPlaceholderText('Email address')
        const pass = getByPlaceholderText('Password')
        expect(email).toBeTruthy()
        expect(pass).toBeTruthy()
        fireEvent.change(email, { target: { value: 'myemail' } })
        fireEvent.change(pass, { target: { value: 'mypass' } })
        expect(getByText('Sign In')).not.toHaveAttribute('disabled')



        expect(container.firstChild).toMatchSnapshot();
    })
    // it('Renders and toggles the feature', () => {
    //     const { container, queryByText, getByAltText } = render(<SigninForm slideRows={testSlideRows} category='catt' />)
    //     expect(container).toHaveTextContent('fun cartoon')
    //     expect(container).not.toHaveTextContent('12')
    //     fireEvent.click(queryByText('Sponge Bob'))
    //     expect(container).toHaveTextContent('12')
    //     fireEvent.click(getByAltText('Close'))
    //     expect(container).not.toHaveTextContent('12')
    // })
})