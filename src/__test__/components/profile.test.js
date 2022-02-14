import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectProfile } from '../../components';
import { MemoryRouter } from 'react-router-dom';

const testSlideRows = [{
    title: 'Documentaries',
    data: [{
        docId: 'd', genre: 't',
        title: 'Sponge Bob', slug: 'sss',
        description: 'fun cartoon', maturity: 12
    }]
}]
describe('SelectProfile is rendered', () => {
    const setProfile = jest.fn()
    it('renders as expected with data', () => {
        const { container, getByText } = render(<MemoryRouter>
            <SelectProfile user={{ photoURL: '2', displayName: 'My user' }}
                setProfile={setProfile} />
        </MemoryRouter>)

        expect(getByText("Who's watching?")).toBeTruthy()
        fireEvent.click(getByText('My user'))
        expect(setProfile).toBeCalled()

        expect(container.firstChild).toMatchSnapshot();
    })

})