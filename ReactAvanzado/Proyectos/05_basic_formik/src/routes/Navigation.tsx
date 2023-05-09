import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

//Iportamos nuestro Page
import { RegisterPage, RegisterFormik, RegisterFormikYup, RegisterFormikComponents,RegisterFormikAbstrato  } from '../03_forms/pages/';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/registerformik" activeClassName="nav-active" exact>Register Formik </NavLink>
            </li>
            <li>
              <NavLink to="/registerformikyup" activeClassName="nav-active" exact>Register Formik  Yup</NavLink>
            </li>            
            <li>
              <NavLink to="/RegisterFormikComponents" activeClassName="nav-active" exact>Register Formik Components</NavLink>
            </li>            
            <li>
              <NavLink to="/RegisterFormikAbstrato" activeClassName="nav-active" exact>Register Formik Abstrato</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/registerformik">
            <RegisterFormik/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>

          <Route path="/registerformikyup">
            <RegisterFormikYup/>
          </Route>
          <Route path="/RegisterFormikComponents">
            <RegisterFormikComponents/>
          </Route>
          <Route path="/RegisterFormikAbstrato">
            <RegisterFormikAbstrato/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}