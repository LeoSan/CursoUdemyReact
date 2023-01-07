import React, {useState, useEffect} from 'react';

const useValidacion = (stateInitial, validar, fn) => {
    
    const [valores, setValores] = useState(stateInitial);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);


    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;

            if (noErrores){
                fn(); // Fn = función que se ejecuta en el componente 
            }

            setSubmitForm(false);

        }
    
    }, []); // no le agrego valores ya que deseo que se ejcute una sola vez 

    
    //función que se ejecuta cuando el suuario escriba algo  

    const handleChange = e =>{
        setValores({
            ...valores, 
            [e.target.name] : e.target.value
        })

    }

    

    //función que se ejecuta cuando el suuario realiza submit 

    const handleSubmit = e =>{
        e.preventDefault();
        const erroresValidacion = validar(valores); 
        setErrores(erroresValidacion);
        setSubmitForm(true);

    }

    const handleBlur = e =>{
        const erroresValidacion = validar(valores); 
        setErrores(erroresValidacion);
    }


    return {
        valores,
        errores,
        submitForm,
        handleChange, 
        handleSubmit, 
        handleBlur  
    };
}
 
export default useValidacion;