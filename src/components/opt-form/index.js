import React from 'react';
import { Container, Input, Button, Text, Break, } from "./styles/opt-form";

const OptForm = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

OptForm.Break = Break
OptForm.Text = Text
OptForm.Input = Input
OptForm.Button = ({ children, ...restProps }) => <Button {...restProps}>{children}
    <img src='/images/icons/chevron-right.png' alt='Try Now' />
</Button>

export default OptForm;
