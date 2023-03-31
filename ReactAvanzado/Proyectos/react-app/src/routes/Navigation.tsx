import {Suspense} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';

//Importamos los Lazy 
import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyload/pages/index';
import { routes } from './routes'; //Forma de crear link dinamicos

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando... </span>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              
                {/*TODO: Crear  naclink dinamicos  */
                  routes.map(route =>( 
                    <li key={route.path}>
                      <NavLink  to={route.path} activeClassName="nav-active" exact>{route.name}</NavLink>
                    </li>
                    
                ))
                }            
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

              {/*TODO: Crear  naclink dinamicos  */
                routes.map(({path, Component}) =>( 
                  <Route 
                      key={path} 
                      path={path} 
                      render={()=>{return <Component/>}}/>
                  
              ))
              }
              <Redirect to={routes[0].path}/>                      
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}