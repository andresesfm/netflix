import React, { useState } from 'react';
import { Container, Search, SearchInput, SearchIcon, Picture, Profile, Frame, Logo, ButtonLink, Dropdown, TextLink, Background, Feature, Text, FeatureCallout, Group, PlayButton } from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom';
import * as ROUTES from "../../constants/routes"
import logo from '../../logo.svg'
const Content = ({ children, ...restProps }) => <Container>
    <Frame {...restProps}>
        <HLogo to={ROUTES.SIGN_IN} src={logo} alt="Netflix" />
        <ButtonLink to={ROUTES.SIGN_IN} >Sign In</ButtonLink>
    </Frame>
    {children}
</Container>

const Header = ({ children, bg = true, ...restProps }) => {

    return (bg ?
        <Background {...restProps}>
            <Content >{children}</Content>
        </Background> :
        <Content >{children}</Content>);
};


const HLogo = ({ to, ...restProps }) => {
    return (<ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>)
}

export default Header;

export const ProfileHeader = () => {
    return (
        <Frame>
            <HLogo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Frame>)
}

export const BrowseHeader = ({ children, user, signOut, searchTerm, setSearchTerm, category, setCategory, ...restProps }) => {
    return (
        <Background {...restProps}>
            <Frame>
                <Group>
                    <HLogo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <TextLink active={category === 'series'} onClick={() => setCategory('series')}>Series</TextLink>
                    <TextLink active={category === 'films'} onClick={() => setCategory('films')}>Films</TextLink>
                </Group>
                <Group>
                    <HSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Profile>
                        <Picture src={`/images/users/${user.photoURL}.png`} />
                        <Dropdown>
                            <Group>
                                <Picture src={`/images/users/${user.photoURL}.png`} />
                                <TextLink>{user.displayName}</TextLink>
                            </Group>
                            <Group>
                                <TextLink onClick={signOut}>Sign out</TextLink>
                            </Group>
                        </Dropdown>
                    </Profile>
                </Group>
            </Frame>
            <Feature>
                <FeatureCallout> Watch Joker now</FeatureCallout>
                <Text>Hello, this is a very good movie, enjoy</Text>
                <PlayButton >Play</PlayButton>
            </Feature>
        </Background>
    )
}

const HSearch = ({ children, searchTerm, setSearchTerm, ...restProps }) => {
    const [searchActive, setSearchActive] = useState(false);

    return <Search {...restProps}>
        <SearchIcon onClick={() => { setSearchActive(active => !active) }}>
            <img src='/images/icons/search.png' alt='Search' />
        </SearchIcon>
        <SearchInput value={searchTerm}
            onChange={({ target }) => { console.log('target', target.value); setSearchTerm(target.value) }}
            placeholder='Search films and series'
            active={searchActive} />
    </Search>;
};
