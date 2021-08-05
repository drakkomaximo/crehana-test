import { FC, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { CountriesContext } from '../../context/CountriesContext'
import { SimpleContainerModal } from '../modal/simple-container.modal'
import { OptionStyled, SelectContainer, SelectStyled } from './styles'

type FormValues = {
    fullName: string,
    email: string,
    cell: string,
    age: number
}

export const WorldSelectFilter: FC = () => {

    const { allCountries, allContinents, allLanguages } = useContext(CountriesContext)
    const [currencies, setCurrencies] = useState([])
    const [currency, setCurrency] = useState('NOTD')
    /*     const [continents, setcontinents] = useState([]) */
    const [continent, setContinent] = useState('NOTD')
    /*     const [lenguages, setLenguages] = useState([]) */
    const [lenguage, setLenguage] = useState('NOTD')

    const deleteDuplicates = (arr: any) => {
        return arr.filter((value: any, index: number) => {
            return arr.indexOf(value) === index;
        });
    }

    useEffect(() => {
        const CreateAllcurrenciesData = () => {
            const currenciesData = allCountries.map((country: any) => (country.currency))
            setCurrencies(deleteDuplicates(currenciesData.sort()))
        }
        CreateAllcurrenciesData()
    }, [allCountries])


    return (
        <SelectContainer>
            <SelectStyled value={currency} onChange={event => setCurrency(event.target.value)}>
                <OptionStyled value={'NOTD'}>Selecciona una moneda </OptionStyled>
                {currencies.map(country => (
                    <OptionStyled key={country} value={country}>
                        {country}
                    </OptionStyled>
                ))}
            </SelectStyled>
            <SelectStyled value={continent} onChange={event => setContinent(event.target.value)}>
                <OptionStyled value={'NOTD'}>Selecciona un continente </OptionStyled>
                {allContinents.map((continent: any) => (
                    <OptionStyled key={continent.code} value={continent.code}>
                        {continent.name}
                    </OptionStyled>
                ))}
            </SelectStyled>
            <SelectStyled value={lenguage} onChange={event => setLenguage(event.target.value)}>
                <OptionStyled value={'NOTD'}>Selecciona un lenguaje</OptionStyled>
                {allLanguages.map((language: any) => (
                    <OptionStyled key={language.code} value={language.code}>
                        {language.name}
                    </OptionStyled>
                ))}
            </SelectStyled>
        </SelectContainer>
    )
}

