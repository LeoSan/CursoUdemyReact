export default function validarNuevoProducto(valores){
    let errores = {};

    //Validar el nombre del producto 
    if(!valores.nombre){
        errores.nombre = 'El nombre del producto es obligatorio.'; 
    }
    //Validar el nombre de la empresa
    if(!valores.empresa){
        errores.empresa = 'El nombre de la empresa es obligatorio.'; 

    }

    //Validar url del producto  
    if(!valores.url){
        errores.url = 'La url del producto es obligatorio.'; 
    }else if( !/^(ftp|http|https):\/\/[^"]+$/.test(valores.url) ){
        errores.url = 'La url no valida.'; 
    }
    //Validar descripcion del producto  
    if(!valores.descripcion){
        errores.descripcion = 'La descripcion del producto es obligatorio.'; 
    }

 return errores; 

}