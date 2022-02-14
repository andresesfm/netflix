import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Loading } from '../../components';
import { MemoryRouter } from 'react-router-dom'

describe('Loading is rendered', () => {
    it('renders Loading as expected with data', () => {
        const { container, getByText } = render(
            <MemoryRouter>
                <Loading src='loadingicon.jpg' />
            </MemoryRouter>)
        expect(container.firstChild).toMatchSnapshot();
    })
})