import { BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom';

import logo from '../../logo.svg';

export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React Logo'/>
                <ul>
                    <li><NavLink to="/home"  className={({isActive})=>isActive ? 'nav-active':''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive})=>isActive ? 'nav-active':''}>About</NavLink></li>
                    <li><NavLink to="/users" className={({isActive})=>isActive ? 'nav-active':''}>User</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/home' element={<h1>Home Page</h1>}></Route>
                <Route path='about' element={<h1>About Page</h1>}></Route>
                <Route path='users' element={<h1>User Page</h1>}></Route>
                
                <Route path='/*' element={<Navigate to="/home" replace />}></Route>
            </Routes>

        </div>    
    </BrowserRouter>
  )
}
