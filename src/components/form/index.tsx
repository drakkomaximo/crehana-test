import { FC, useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../../context/CountriesContext'
import { OptionStyled, SelectContainer, SelectStyled, TitleStyled } from './styles'

export const WorldSelectFilter: FC<{ resetValue: boolean }> = ({ resetValue }) => {

    const { allCountries, allContinents, allLanguages, setFilterValue, setResetFilters } = useContext(CountriesContext)
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

    const CreateFilterValue = (type: string, value: string) => {
        setFilterValue({
            type,
            value
        })
        switch (type) {
            case 'language':
                setLenguage(value)
                setCurrency('NOTD')
                setContinent('NOTD')
                break;
            case 'currency':
                setLenguage('NOTD')
                setCurrency(value)
                setContinent('NOTD')
                break;
            case 'continent':
                setLenguage('NOTD')
                setCurrency('NOTD')
                setContinent(value)
                break;

            default:
                setLenguage('NOTD')
                setCurrency('NOTD')
                setContinent('NOTD')
                break;
        }
    }

    useEffect(() => {
        const CreateAllcurrenciesData = () => {
            const currenciesData = allCountries.map((country: any) => (country.currency))
            setCurrencies(deleteDuplicates(currenciesData.sort()))
        }
        CreateAllcurrenciesData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allCountries])

    useEffect(() => {
        if (resetValue) {
            setLenguage('NOTD')
            setCurrency('NOTD')
            setContinent('NOTD')
            setTimeout(() => {
                setResetFilters(false)
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resetValue])


    return (
        <SelectContainer>
            <TitleStyled>
                Busqueda especififca:
            </TitleStyled>
            <SelectStyled value={lenguage} onChange={event => CreateFilterValue('language', event.target.value)}>
                <OptionStyled value={'NOTD'}>Selecciona un lenguaje</OptionStyled>
                {allLanguages.map((language: any) => (
                    <OptionStyled key={language.code} value={language.code}>
                        {language.name}
                    </OptionStyled>
                ))}
            </SelectStyled>
            <SelectStyled value={currency} onChange={event => CreateFilterValue('currency', event.target.value)}>
                <OptionStyled value={'NOTD'}>Selecciona una moneda </OptionStyled>
                {currencies.map(country => (
                    <OptionStyled key={country} value={country}>
                        {country}
                    </OptionStyled>
                ))}
            </SelectStyled>
            <SelectStyled value={continent} onChange={event => CreateFilterValue('continent', event.target.value)}>
                <OptionStyled value={'NOTD'}>Selecciona un continente </OptionStyled>
                {allContinents.map((continent: any) => (
                    <OptionStyled key={continent.code} value={continent.code}>
                        {continent.name}
                    </OptionStyled>
                ))}
            </SelectStyled>
        </SelectContainer>
    )
}

