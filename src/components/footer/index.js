import React from 'react';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer';


const Footer = () => {
    return <Container>
        <Title>Questions? Contact us.</Title>
        <Break />
        <Row>
            <Column>
                <Link href="#">FAQ</Link>
                <Link href="#">Investor Relations</Link>
                <Link href="#">Ways to Watch</Link>
                <Link href="#">Corporate Information</Link>
                <Link href="#">Netflix Originals</Link>
            </Column>

            <Column>
                <Link href="#">Help Centre</Link>
                <Link href="#">Jobs</Link>
                <Link href="#">Terms of Use</Link>
                <Link href="#">Contact Us</Link>
            </Column>

            <Column>
                <Link href="#">Account</Link>
                <Link href="#">Redeem gift cards</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Speed Test</Link>
            </Column>

            <Column>
                <Link href="#">Media Centre</Link>
                <Link href="#">Buy gift cards</Link>
                <Link href="#">Cookie Preferences</Link>
                <Link href="#">Legal Notices</Link>
            </Column>
        </Row>
        <Break />
        <Text>Netflix United Kingdom</Text>
    </Container>;
};

export default Footer;
