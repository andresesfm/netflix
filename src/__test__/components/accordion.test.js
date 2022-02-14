import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from '../../components';

describe('Accordion is rendered', () => {
    it('renders as expected with data', () => {
        const { container, getByText } = render(<Accordion />)

        expect(getByText('Frequently Asked Questions')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot();
    })
    it('Opens and closes items', () => {
        const { container, queryByText } = render(<Accordion />)
        expect(container).not.toHaveTextContent('TV programmes')
        fireEvent.click(queryByText('What is Netflix?'))
        expect(container).toHaveTextContent('TV programmes')
        fireEvent.click(queryByText('What is Netflix?'))
        expect(container).not.toHaveTextContent('TV programmes')
        expect(container.firstChild).toMatchSnapshot();
    })
})