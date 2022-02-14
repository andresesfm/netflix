import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card } from '../../components';

const testSlideRows = [{
    title: 'Documentaries',
    data: [{
        docId: 'd', genre: 't',
        title: 'Sponge Bob', slug: 'sss',
        description: 'fun cartoon', maturity: 12
    }]
}]
describe('Card is rendered', () => {
    it('renders as expected with data', () => {
        const { container, getByText } = render(<Card slideRows={testSlideRows} category='catt' />)

        expect(getByText('Documentaries')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot();
    })
    it('Renders and toggles the feature', () => {
        const { container, queryByText, getByAltText } = render(<Card slideRows={testSlideRows} category='catt' />)
        expect(container).toHaveTextContent('fun cartoon')
        expect(container).not.toHaveTextContent('12')
        fireEvent.click(queryByText('Sponge Bob'))
        expect(container).toHaveTextContent('12')
        fireEvent.click(getByAltText('Close'))
        expect(container).not.toHaveTextContent('12')
    })
})