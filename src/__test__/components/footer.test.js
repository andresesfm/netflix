import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('Footer is rendered', () => {
    it('renders as expected with data', () => {
        const { container, getByText } = render(<Footer />)

        expect(getByText('Questions? Contact us.')).toBeTruthy()
        expect(container).toMatchSnapshot();
    })
})