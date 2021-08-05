import { useContext, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import CrehanaLogo from '../../assets/crehana-logo.png'
import { CountriesContext } from '../../context/CountriesContext';

import { ButtonStyled, InputStyled, Logo, Nav, SearchContainer, StickyContainer } from './styles';

const Burger = () => {
  const history = useHistory()
  const { setFilterValue, setResetFilters } = useContext(CountriesContext)
  const [value, setValue] = useState('')

  const serachByType = (type: string) => {
    setValue('')
    if (value !== '') {
      switch (type) {
        case 'code':
          history.push(`/search-by-code/${value}`)
          break;
        case 'name':
          history.push(`/search-by-name/${value}`)
          break;

        default:
          break;
      }
    }
  }

  return (
    <StickyContainer>
      <Nav>
        <NavLink to={'/'} onClick={() => { 
            setFilterValue({ type: '', value: ''}) 
            setResetFilters(true)
            }}>
          <Logo src={CrehanaLogo} alt="Crehana logo" />
        </NavLink>
        <SearchContainer>
          <InputStyled  placeholder={'buscar....'} type='text' onChange={(e) => { setValue(e.target.value) }} value={value} />
          <ButtonStyled onClick={() => { serachByType('name') }}>Buscar por nombre</ButtonStyled>
          <ButtonStyled onClick={() => { serachByType('code') }}>Buscar por código</ButtonStyled>
        </SearchContainer>
      </Nav>
    </StickyContainer>
  )
}
export default Burger