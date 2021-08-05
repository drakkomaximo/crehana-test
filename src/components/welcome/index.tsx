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
  const { setAllCountries, setAllContinents, setAllLanguages, allContinents, filterValue, resetFilters } = useContext(CountriesContext)

  useEffect(() => {
    if (data?.countries && data.countries.length > 0) {
      setAllCountries(data.countries)
      setAllContinents(data.continents)
      setAllLanguages(data.languages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const filterCounrtyByType = (array: any, conditionFilter: { type: string; value: string }) => {
    switch (conditionFilter.type) {
      case 'currency':
        const filterByCurrency = array.filter((
          (country: any) => country.currency === conditionFilter.value
        ))
        return filterByCurrency;
      case 'language':
        console.log(conditionFilter.value, 'languageValue')
        const filterByLanguage = array.filter((
          (country: any) => country?.languages[0]?.code === conditionFilter.value
        ))
        console.log(filterByLanguage, 'language')
        return filterByLanguage;
      case 'continent':
        const filterByContinent = allContinents.filter((
          (continent: any) => continent?.code === conditionFilter.value
        ))
        return filterByContinent[0]?.countries;
      default:
        return array;
    }
  }

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
            <br />
            <WorldSelectFilter resetValue={resetFilters}/>
            <WelcomeContainer>
              {filterCounrtyByType(data.countries, filterValue).map((country: any) => (
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

