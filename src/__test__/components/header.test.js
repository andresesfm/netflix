import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header, BrowseHeader, ProfileHeader } from '../../components';
import { MemoryRouter } from 'react-router-dom'


describe('Header is rendered', () => {
    it('renders Header as expected with data', () => {
        const { container } = render(
            <MemoryRouter>
                <Header category='catt' />
            </MemoryRouter>)

        expect(container.firstChild).toMatchSnapshot();
    })
    it('renders as expected with no bg', () => {
        const { container } = render(
            <MemoryRouter>
                <Header category='catt' bg={false} />
            </MemoryRouter>)
        expect(container.firstChild).toMatchSnapshot();
    })
    it('Renders BrowseHeader and toggles the search', () => {
        const user = { photoURL: '5', displayName: 'Andy' }
        const setCategory = jest.fn()
        const setSearchTerm = jest.fn()
        const { container, queryByText, getByAltText, getByPlaceholderText } = render(
            <MemoryRouter>
                <BrowseHeader
                    category='films'
                    user={user}
                    setCategory={setCategory}
                    setSearchTerm={setSearchTerm} />
            </MemoryRouter>)
        const films = queryByText('Films')
        expect(films).toBeTruthy()
        const series = queryByText('Series')
        expect(series).toBeTruthy()
        expect(series).not.toHaveAttribute('active')
        fireEvent.click(series)
        fireEvent.click(films)
        expect(setCategory).toBeCalledTimes(2)
        fireEvent.click(getByAltText('Search'))
        fireEvent.change(getByPlaceholderText('Search films and series'), { target: { value: 'Sponge' } })
        expect(setSearchTerm).toBeCalledTimes(1)

        expect(container.firstChild).toMatchSnapshot();

    })
    it('renders ProfileHeader as expected with data', () => {
        const { container, getByAltText } = render(
            <MemoryRouter>
                <ProfileHeader />
            </MemoryRouter>)
        expect(getByAltText('Netflix')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot();
    })
})