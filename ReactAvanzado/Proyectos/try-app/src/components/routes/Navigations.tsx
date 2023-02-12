import { BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom';
import logo from '../../logo.svg';

//Import to  components 
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/modcarga/pages';

export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React Logo'/>
                <ul>
                    <li><NavLink to="/home"  className={({isActive})=>isActive ? 'nav-active':''}>Home</NavLink></li>
                    <li><NavLink to="/lazyone" className={({isActive})=>isActive ? 'nav-active':''}>lazy one</NavLink></li>
                    <li><NavLink to="/lazytwo" className={({isActive})=>isActive ? 'nav-active':''}>lazy two</NavLink></li>
                    <li><NavLink to="/lazytree" className={({isActive})=>isActive ? 'nav-active':''}>Lazy tree</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/home'    element={<h1>Home Page</h1>}></Route>
                <Route path='lazyone'  element={ <LazyPageone/> }></Route>
                <Route path='lazytwo'  element={ <LazyPagetwo/>}></Route>
                <Route path='Lazytree' element={ <LazyPagetree/>}></Route>
                
                <Route path='/*' element={<Navigate to="/home" replace />}></Route>
            </Routes>

        </div>    
    </BrowserRouter>
  )
}
