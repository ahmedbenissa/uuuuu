import react ,{Component} from 'react';
import styled from 'styled-components';
export default function Home()
{
    return (
        <WelcomeWrapper>welcome to our app</WelcomeWrapper>
    )
}
const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;