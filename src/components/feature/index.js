import React from 'react';
import { Container, Title, SubTitle } from './styles/feature'
import OptForm from '../opt-form';
const Feature = () => {
    return <Container>
        <Title>Unlimited films, TV progams and more.</Title>
        <SubTitle >Watch anywhere. Cancel any time.</SubTitle>
        <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        </OptForm>
    </Container>;
};

export default Feature;
