import {ChangeEvent, useRef, useContext} from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
    const { searchPlacesByTerm } = useContext(PlacesContext);
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChange = (event:ChangeEvent<HTMLInputElement>)=>{
        
        if (debounceRef.current){
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
           //console.log('Debound value:', event.target.value );
           searchPlacesByTerm(event.target.value); 
        }, 1000);

    }
    
    return (
    <div className='search-container'>
        <input
            type='text'
            className='form-control'
            placeholder='Buscar Lugar'
            onChange={ onQueryChange } />

            <SearchResults/>
    </div>
  )
}
