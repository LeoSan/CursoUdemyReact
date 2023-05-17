//Busqueda
import { useFormik, FormikErrors } from 'formik';
import { FormValues } from '../interfaces/interfaces';

//Estilos 
import '../styles/styles.css'; 


export const RegisterFormik = () => {

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    const validate = (values:FormValues)=>{
        
        const errors:FormikErrors<FormValues>={};
       
        if (!values.nombre){
            errors.nombre = 'Campo obligatorio'; 
        }else if (values.nombre.length < 5){
            errors.nombre = 'Este campo debe ser mayor a 5 caracteres.'; 
        }        
       
        if (!values.apellido){
            errors.apellido = 'Campo obligatorio'; 
        }else if (values.apellido.length < 5){
            errors.apellido = 'Este campo debe ser mayor a 5 caracteres.'; 
        }    
       
        if (!values.email){
            errors.email = 'Campo obligatorio'; 
        }else if(!isValidEmail(values.email)){
            errors.email = 'Formato no correcto del correo.'; 
        }        

        return errors;

    }

    const formik = useFormik({
        initialValues:{
            nombre:'',   //Debe coincidir con el nombre del input 
            apellido:'', //Debe coincidir con el apellido del input 
            email:'',    //Debe coincidir con el email del input 
        },
        onSubmit: async (values)=>{
            //Solo se diapara cuanto todas las reglas de validacion esten validadad
            console.log('%c Oh my heavens! ', 'background: #222; color: #bada55', values);
        },
        validate
    }); 


  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={formik.handleSubmit} >
            <label htmlFor='nombre'>Nombre:</label>
            <input
                name='nombre'
                placeholder='Ingrese nombre'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.nombre}
                onBlur={formik.handleBlur}
            />
            { formik.touched.nombre && formik.errors.nombre && <span>{formik.errors.nombre}</span> }
            

            <label htmlFor='nombre'>Apellido:</label>
            <input
                name='apellido'
                placeholder='Ingrese nombre'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.apellido}
                onBlur={formik.handleBlur}
            />
            { formik.touched.apellido && formik.errors.apellido && <span>{formik.errors.apellido}</span> }
            <label htmlFor='email'>Email:</label>
            <input
                name='email'
                placeholder='Ingrese email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
           { formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span> }
            <button type="submit"> Register </button>  
            <button type="button"> Reset Form </button>  


        </form>
    </div>
  )
}
