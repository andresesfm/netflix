import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Jumbotron } from '../../components';
import { MemoryRouter } from 'react-router-dom'
import jumboData from '../../fixtures/jumbo.json'

describe('Jumbotron is rendered', () => {
    it('renders Jumbotron as expected with data', () => {
        const { container, getByText } = render(
            <MemoryRouter>
                <Jumbotron data={jumboData} />
            </MemoryRouter>)
        expect(getByText('Enjoy on your TV.')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot();
    })
})