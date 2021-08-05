import { FC, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Flag from 'react-world-flags'
import { CountriesContext } from '../../context/CountriesContext'
import { GetTrevorbladesQqlApiService } from '../../services/trevorblades-gql-api-service'
import { WorldSelectFilter } from '../form'
import Loading from '../loading'
import { WelcomeContainer, WelcomeContainerInfo, WelcomeDescription, WelcomeTitle } from './styles'

export const Welcome: FC = () => {

  const history = useHistory()
  const { data, loading, error } = GetTrevorbladesQqlApiService()
  const { setAllCountries, setAllContinents, setAllLanguages } = useContext(CountriesContext)

  useEffect(() => {
    if (data?.countries && data.countries.length > 0) {
      setAllCountries(data.countries)
      setAllContinents(data.continents)
      setAllLanguages(data.languages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <>
      {
        loading || error ? (
          <Loading />
        ) : (
          <>
            <WelcomeDescription fontSize={'30px'}>
              Bienvenidos a Chehana Country World
            </WelcomeDescription>
            <WelcomeDescription fontSize={'25px'}>
              Aplicación donde podrás conocer sobre el pais que desees!
            </WelcomeDescription>
            <WorldSelectFilter />
            <WelcomeContainer>
              {data.countries.map((country: any) => (
                <WelcomeContainerInfo key={country.code} onClick={() => { history.push(`/search-by-name/${country.name.toLowerCase()}`) }}>
                  <WelcomeTitle>{country.name}</WelcomeTitle>
                  <Flag code={country.code} height="50" width='70' />
                </WelcomeContainerInfo>
              ))}
            </WelcomeContainer>
          </>
        )
      }

    </>
  )
}

