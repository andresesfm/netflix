import React from 'react';
import { ProfileHeader } from '../header';
import { Container, Title, List, Item, Picture, Name } from './styles/profile'


const SelectProfile = ({ user, setProfile }) => {
    return <><ProfileHeader bg={false} />
        <Container>
            <Title>Who's watching?</Title>
            <List>
                <Item onClick={() => setProfile({
                    displayName: user.displayName,
                    photoURL: user.photoURL
                })}>
                    <Picture src={`/images/users/${user.photoURL}.png`} />
                    <Name >{user.displayName}</Name>
                </Item>
            </List>
        </Container>
    </>;
};

export default SelectProfile;
