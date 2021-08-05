import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: center space-evenly;
    align-items: center;
    padding: 1rem;
`

export const WelcomeContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 15rem;
    margin: 0rem 0rem 2rem;
    cursor: pointer;
`

export const WelcomeTitle = styled.h1`
    text-align: center;
    color: white;
    font-size: 24px;
`

export const WelcomeDescription = styled.p<{fontSize: string}>`
    text-align: center;
    color: white;
    font-size: ${({fontSize}): string=> fontSize};
`