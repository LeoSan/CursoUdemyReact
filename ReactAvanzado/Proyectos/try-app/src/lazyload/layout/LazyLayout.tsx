import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';


export const LazyLayout = ()=>{

    return (

        <div>
            <h1>LazyLayout</h1>
            <ul>
                <li><NavLink to="lazy1">Lazy 1</NavLink></li>
                <li><NavLink to="lazy2">Lazy 2</NavLink></li>    
                <li><NavLink to="lazy3">Lazy 3</NavLink></li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<LazyPageone/>}></Route>
                <Route path="lazy2" element={<LazyPagetwo/>}></Route>
                <Route path="lazy3" element={<LazyPagetree/>}></Route>
                <Route path="*" element={<Navigate replace to="lazy1"/>}></Route>
            </Routes>
        </div>
    )
}

export default LazyLayout;