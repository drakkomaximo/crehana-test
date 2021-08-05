import {FC} from 'react'
import { useParams } from 'react-router-dom'
import { gql } from '@apollo/client'
import Flag from 'react-world-flags'
import { GetTrevorbladesQqlApiService } from '../../../services/trevorblades-gql-api-service'
import { WelcomeContainer,WelcomeContainerInfo, WelcomeDescription, WelcomeTitle } from '../styles'
import Loading from '../../loading';

export const  SimpleCountry: FC = () => {
    const { code } = useParams<any>()
    const simpleQuery = gql`
    {
      country(code: "${code ? code.toUpperCase() : 'CO' }") {
        name
        native
        capital
        code
        currency
        languages {
          code
          name
        }
      }
    }
  `;
    const { data, loading, error } = GetTrevorbladesQqlApiService(simpleQuery)

    if (loading || error) {
        return (
          <Loading/>
        )
      }  

    const { country } = data

    return (
        country ? (
          <>
        <WelcomeDescription fontSize={'30px'}>
            El país resultado es:
        </WelcomeDescription>
        <WelcomeContainer>
        <WelcomeContainerInfo>
            <WelcomeTitle>{country.name}</WelcomeTitle>
            <Flag code={country.code} height="50" width='70' />
            </WelcomeContainerInfo>
        </WelcomeContainer>
        </>
        ):(
          <>
          <WelcomeDescription fontSize={'30px'}>
            No existe el país consultado
        </WelcomeDescription>
          <WelcomeDescription fontSize={'20px'}>
            Por favor usar códigos internacionales válidos
        </WelcomeDescription>
          </>
        )
    )
}

