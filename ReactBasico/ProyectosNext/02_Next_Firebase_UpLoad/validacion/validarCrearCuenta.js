export default function validarCrearCuenta(valores){
    let errores = {};

    //Validar el nombre del usuario 
    if(!valores.nombre){
        errores.nombre = 'El nombre es obligatorio.'; 
    }
    //Validar el email 
    if(!valores.email){
        errores.email = 'El email es obligatorio.'; 

    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ){
        errores.email = 'El email no es valido.'; 
    }
    //Validar el password 
    if(!valores.pass){
        errores.pass = 'El password es obligatorio.'; 
    }else if(valores.email.length < 6){
        errores.pass = 'El password debe ser mayor de 6 caracteres.'; 
    }

 return errores; 

}