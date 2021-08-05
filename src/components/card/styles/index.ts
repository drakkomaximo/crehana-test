import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    felx-direction: column;
    place-content: center space-evenly;
    align-items: center;
    padding: 2rem 2rem 4rem;
    flex-direction: column;
    border: 1px solid #97d633;
    border-radius: 20px;
    margin: 0rem 0rem 1rem;
    width: 80%;
    max-width: 600px;

    @media (max-width: 425px) {
        width: 70%;
      }
`

export const WelcomeContainerInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
`

export const WelcomeContainerSubInfo = styled.div`
    padding: 0rem 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`

export const WelcomeTitle = styled.h1`
    text-align: center;
    color: white;
    font-size: 24px;
    padding: 1rem;
`

export const WelcomeSubtitle = styled.h1`
    text-align: center;
    color: white;
    font-size: 22px;
    margin: 0px;
`

export const WelcomeSubtitleSpan = styled.span`
    text-align: center;
    color: #97d633;
    font-size: 16px;
`

export const VerticalLine = styled.span`
    text-align: center;
    color: #97d633;
    font-size: 16px;

    @media (max-width: 425px) {
        display: none;
      }
`

export const WelcomeDescription = styled.p<{fontSize: string}>`
    text-align: center;
    color: white;
    font-size: ${({fontSize}): string=> fontSize};
`

export const HorizontalLine = styled.hr<{marginLine: string}>`
    width: 100%;
    margin: ${({marginLine}): string=> marginLine};
`