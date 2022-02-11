import React from 'react';
import jumboData from '../fixtures/jumbo'
import { Accordion, Feature, Footer, Header, Jumbotron } from '../components';

const Home = () => {
    return <>
        <Header >
            <Feature />
        </Header>
        <Jumbotron data={jumboData} />
        <Footer />
        <Accordion />

    </>;
};

export default Home;
