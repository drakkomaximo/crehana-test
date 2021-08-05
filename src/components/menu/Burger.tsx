import { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import CrehanaLogo from '../../assets/it-globers-logo.png'

import { Logo, Nav, StickyContainer } from './styles';

const Burger = () => {
  const history = useHistory()
  const [value, setValue] = useState('')

  const serachByType = (type: string) =>{
    setValue('')
    if(value !== ''){
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
    }else{
      
    }
  }

  return (
    <StickyContainer>
      <Nav>
        <NavLink to={'/'}>
        <Logo src={CrehanaLogo} alt="Crehana logo" />
        </NavLink>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          paddingRight: '1rem',
        }}>
        <input type='text' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
        <button onClick={()=>{serachByType('name')}}>Buscar por nombre</button>
        <button onClick={()=>{serachByType('code')}}>Buscar por código</button>
        </div>
      </Nav>
    </StickyContainer>
  )
}
export default Burger