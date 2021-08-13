import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
                <CTA> 
                    <CTALogo1 src= "./images/cta-logo-one.svg" />
                    <SignUp>Get All There</SignUp>
                    <Decription>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Decription>
                    <CTALogo2 src= "./images/cta-logo-two.png" />
                </CTA>
        </Container>
    )
}

export default Login
const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("./images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogo1 = styled.img`

`
const CTALogo2 = styled.img`
    width: 90%;
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 19px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    
    &:hover {
        background-color: #0483ee;
    }
`
const Decription = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`