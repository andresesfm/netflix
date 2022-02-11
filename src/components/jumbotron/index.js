import React from 'react';
import { Inner, Container, Item, Title, SubTitle, Image } from './styles/jumbotron';

const index = ({ children, direction = 'row', data, ...restProps }) => {
    return (
        <Container>
            {data.map(({ id, direction, title, image, alt, subTitle }) =>
            (<Item key={id}><Inner direction={direction} >
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <Image src={image} alt={alt} />
            </Inner>
            </Item>))}
        </Container>)

};

export default index;
