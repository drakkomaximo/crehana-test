import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { gql } from '@apollo/client'
import { GetTrevorbladesQqlApiService } from '../../../services/trevorblades-gql-api-service'
import { WelcomeDescription } from '../styles'
import Loading from '../../loading';
import { Card } from '../../card'

export const SimpleCountry: FC = () => {
  const { code } = useParams<any>()
  const simpleQuery = gql`
    {
      country(code: "${code ? code.toUpperCase() : 'CO'}") {
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
      <Loading />
    )
  }

  const { country } = data

  return (
    country ? (
      <>
        <WelcomeDescription fontSize={'30px'}>
          El país resultado es:
        </WelcomeDescription>
        <Card country={country} />
      </>
    ) : (
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

