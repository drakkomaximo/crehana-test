import { FC } from 'react'
import Flag from 'react-world-flags'
import { HorizontalLine, VerticalLine, WelcomeContainer, WelcomeContainerInfo, WelcomeContainerSubInfo, WelcomeSubtitle, WelcomeSubtitleSpan, WelcomeTitle } from './styles'



type CardProps = {
    action?: any,
    country: {
        name: string,
        code: string,
        native: string,
        capital: string,
        currency: string, 
        phone: string,
        languages: {
            name: string,
            native: string
        }[]
    }
}

export const Card: FC<CardProps> = ({ action, country }) => {

    return (
        <>
            <WelcomeContainer onClick={action}>
                <WelcomeContainerInfo>
                    <WelcomeTitle>{country.name}</WelcomeTitle>
                    <div style={{
                        padding: '1rem 0rem',
                    }}>
                        <Flag code={country.code} height="50" width='70' />
                    </div>
                </WelcomeContainerInfo>
                <HorizontalLine marginLine={'0rem 0rem 1.5rem'}/>
                <WelcomeContainerInfo>
                    <WelcomeContainerSubInfo>
                        <WelcomeSubtitle>Nombre Nativo</WelcomeSubtitle>
                        <WelcomeSubtitleSpan>{country.native}</WelcomeSubtitleSpan>
                    </WelcomeContainerSubInfo>
                    <WelcomeContainerSubInfo>
                        <WelcomeSubtitle>Capital</WelcomeSubtitle>
                        <WelcomeSubtitleSpan>{country.capital ? country.capital : 'NO DATA'}</WelcomeSubtitleSpan>
                    </WelcomeContainerSubInfo>
                </WelcomeContainerInfo>
                <HorizontalLine marginLine={'1.5rem'}/>
                <WelcomeContainerInfo>
                    <WelcomeContainerSubInfo>
                        <WelcomeSubtitle>Moneda Local</WelcomeSubtitle>
                        <WelcomeSubtitleSpan>{country.currency ? country.currency : 'NO DATA'}</WelcomeSubtitleSpan>
                    </WelcomeContainerSubInfo>
                    <VerticalLine>|</VerticalLine>
                    <WelcomeContainerSubInfo>
                        <WelcomeSubtitle>Indicativo</WelcomeSubtitle>
                        <WelcomeSubtitleSpan>+{country.phone ? country.phone : 'NO DATA'}</WelcomeSubtitleSpan>
                    </WelcomeContainerSubInfo>
                    <VerticalLine>|</VerticalLine>
                    <WelcomeContainerSubInfo>
                        <WelcomeSubtitle>Idioma Local</WelcomeSubtitle>
                        <WelcomeSubtitleSpan>{country?.languages[0]?.name ? country?.languages[0]?.name : 'NO DATA'}</WelcomeSubtitleSpan>
                    </WelcomeContainerSubInfo>
                </WelcomeContainerInfo>
            </WelcomeContainer>
        </>
    )
}

