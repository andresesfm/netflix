import React, { createContext, useContext, useState } from 'react';
import { Container, Title, Inner, Frame, Header, Body, Item } from './styles/accordion'
import OptForm from "../opt-form";
import faqData from "../../fixtures/faqs";

const ToggleContext = createContext()

const Accordion = ({ children, ...restProps }) => {
    return (<Container>
        <Inner><Title>Frequently Asked Questions</Title>
            <Frame>
                {faqData.map(({ id, header, body }) => (
                    <AItem key={id}>
                        <AHeader>{header}</AHeader>
                        <ABody>{body}</ABody>
                    </AItem>
                ))}
            </Frame>

            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm></Inner>
    </Container>);
};

const AItem = ({ children, ...restProps }) => {
    const [toggleShow, setToggleShow] = useState(false)
    return (<ToggleContext.Provider value={{ toggleShow, setToggleShow }}><Item {...restProps}>{children}</Item></ToggleContext.Provider>)
}

const AHeader = ({ children, ...restProps }) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow((show) => !show)} {...restProps}>
            {children}
            {toggleShow ?
                (<img src='/images/icons/close-slim.png' alt='Close' />) :
                (<img src='/images/icons/add.png' alt='Open' />)}</Header>
    )
}

const ABody = ({ children, ...restProps }) => {
    const { toggleShow } = useContext(ToggleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}


export default Accordion;
