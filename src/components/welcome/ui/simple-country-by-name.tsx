import { FC, useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { WelcomeDescription } from '../styles'
import { CountriesContext } from '../../../context/CountriesContext'
import { Card } from '../../card'

export const SimpleCountryByName: FC = () => {

  const history = useHistory()
  const { name } = useParams<any>()
  const { allCountries } = useContext(CountriesContext)
  const [countriesFilterByName, setCountriesFilterByName] = useState([])

  useEffect(() => {
    const filterCountry = allCountries.filter((
      (country: any) => country.name.toLowerCase().includes(name.toLowerCase())
    ))
    setCountriesFilterByName(filterCountry)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <>
      {
        countriesFilterByName.length > 0 ? (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column'
          }}>
            <WelcomeDescription fontSize={'30px'}>
              El país resultado es:
            </WelcomeDescription>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {
                countriesFilterByName.map((country: any) => (
                  <Card
                    key={country.code}
                    action={() => { history.push(`/search-by-name/${country.name.toLowerCase()}`) }}
                    country={country}
                  />
                ))
              }
            </div>
          </div>
        ) : (
          <>
            <WelcomeDescription fontSize={'30px'}>
              No existen coincidencias con la palabra ""{name}""
            </WelcomeDescription>
            <WelcomeDescription fontSize={'20px'}>
              Por favor digital un nombre lo más especifico posible
            </WelcomeDescription>
          </>
        )
      }
    </>
  )
}

