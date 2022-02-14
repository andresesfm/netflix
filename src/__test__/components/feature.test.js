import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Feature } from '../../components';


describe('Feature is rendered', () => {
    it('renders as expected with data', () => {
        const { container, getByText } = render(<Feature />)

        expect(getByText('Unlimited films, TV progams and more.')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot();
    })

})