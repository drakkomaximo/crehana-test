import { FC } from 'react'
import {
  Redirect,
  Switch, Route
} from "react-router-dom";
import { Welcome } from '../components/welcome/index';
import Burger from '../components/menu/Burger';
import { SimpleCountry } from '../components/welcome/ui/simple-country';
import { SimpleCountryByName } from '../components/welcome/ui/simple-country-by-name';

const AppRouter: FC = () => {
  return (
    <>
      <Redirect exact to='/' />
      <Burger />
      <Switch>
        <Route exact path="/search-by-code/:code">
          <SimpleCountry />
        </Route>
        <Route exact path="/search-by-name/:name">
          <SimpleCountryByName />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>

      </Switch>
    </>
  )
}

export default AppRouter