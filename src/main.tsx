import { FC, useState } from 'react'
import AppRouter from './router/app-router'
import { BrowserRouter } from 'react-router-dom';
import { CountriesContext } from './context/CountriesContext';

export const Main: FC = () => {

    const [allCountries, setAllCountries] = useState([])
    const [allContinents, setAllContinents] = useState([])
    const [allLanguages, setAllLanguages] = useState([])
    const [filterValue, setFilterValue] = useState({
        type: '',
        value: ''
    })
    const [resetFilters, setResetFilters] = useState(false)

    return (
        <CountriesContext.Provider value={{
            allCountries, 
            setAllCountries,
            allContinents,
            setAllContinents,
            allLanguages,
            setAllLanguages,
            filterValue,
            setFilterValue,
            resetFilters, 
            setResetFilters
        }}>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
        </CountriesContext.Provider>
    )
}
