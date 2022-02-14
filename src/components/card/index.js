import React, { createContext, useState, useEffect, useContext } from 'react';
import {
    Container,
    Group,
    Title,
    Subtitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image
} from './styles/card'
import { Player } from '../'
export const FeatureContext = createContext()

const Card = ({ children, category, slideRows, ...restProps }) => {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});
    const [selectedGroup, setSelectedGroup] = useState(null);
    return <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature, setSelectedGroup, selectedGroup }}>

        <Group flexDirection='column'  {...restProps}>
            {slideRows.map((slideItem) => (
                <Container key={`${category}-${slideItem.title.toLowerCase()}`} >
                    <Title>{slideItem.title}</Title>
                    <Entities>
                        {slideItem.data.map((item) => (
                            <CItem key={item.docId} item={item} group={slideItem.title}>
                                <Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Meta>
                                    <Subtitle>{item.title}</Subtitle>
                                    <Text>{item.description}</Text>
                                </Meta>
                            </CItem>
                        ))}
                    </Entities>
                    <CFeature category={category} group={slideItem.title}>
                        <Player src='/videos/bunny.mp4' />
                    </CFeature>
                </Container>
            ))}
        </Group>
    </FeatureContext.Provider>;
};

const CItem = ({ children, item, group, ...restProps }) => {
    const { setShowFeature, setItemFeature, setSelectedGroup } = useContext(FeatureContext);
    return <Item
        onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
            setSelectedGroup(group)
        }}
        {...restProps}>
        {children}
    </Item>;
};

const CFeature = ({ children, category, group, ...restProps }) => {
    const { showFeature, itemFeature, setShowFeature, selectedGroup } = useContext(FeatureContext);
    return (showFeature && group === selectedGroup ? <Feature
        src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
        {...restProps}>
        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => { setShowFeature(false) }}>
                <img src='/images/icons/close.png' alt='Close' />
            </FeatureClose>
            <Group margin="80px 0" flexDirection="column" alignItems='center'>
                <Maturity rating={itemFeature.maturity}>
                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                </Maturity>
                <FeatureText fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
            </Group>
        </Content>
        {children}
    </Feature> : null);
};



export default Card;
