import {Suspense} from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom';
import logo from '../../logo.svg';

//Import to  components 
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';
import { routes } from './routes'; //Forma de crear link dinamicos 



export const Navigations = () => {
  return (
    <Suspense fallback={ <span>Loading....</span> }>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo'/>
                    <ul>
                    <li><NavLink to="/home"  className={({isActive})=>isActive ? 'nav-active':''}>Home</NavLink></li>       
                        {/*TODO: Crear  naclink dinamicos  */
                            routes.map(route =>( 

                                <li key={route.to}><NavLink to={route.to}  className={({isActive})=>isActive ? 'nav-active':''}>{route.name}</NavLink></li>
                                
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    <Route path='/home'    element={<h1>Home Page</h1>}></Route>
                    <Route path='lazyone'  element={ <LazyPageone/> }></Route>
                    {
                        routes.map(route =>( 
                            <Route key={route.to} path={route.path} element={<route.Component/>}></Route>
                        ))
                    }
                    <Route path='/*' element={<Navigate to="/home" replace />}></Route>
                </Routes>

            </div>    
        </BrowserRouter>
    </Suspense>
  )
}
