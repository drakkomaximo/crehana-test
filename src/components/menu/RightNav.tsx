import CrehanaLogo from '../../assets/it-globers-logo.png'

import { NavLink } from "react-router-dom";
import { LogoUl, Ul } from './styles';

type optionsProps = {
  id: string;
  name: string;
}

type Props = {
  open: boolean;
  setOpen: any;
  options: optionsProps[] | [];
}

function RightNav({open, setOpen, options = []}: Props) {

  return (
    <Ul open={open}>
        <LogoUl src={CrehanaLogo} alt={'Crehana logo'} />
        {
          options.map((option)=>(
          <NavLink
            onClick={()=>{setOpen(!open)}}
            key={option.id}
            to={`/${option.name}`}
            activeStyle={{
            fontWeight: "bold",
            color: 'white',
            backgroundColor: '#749c75',
            transition: 'all 0.5s ease'
          }}
        >
          <li>{option.name}</li>
        </NavLink>
          ))
        }
      </Ul>
  )
}

export default RightNav
