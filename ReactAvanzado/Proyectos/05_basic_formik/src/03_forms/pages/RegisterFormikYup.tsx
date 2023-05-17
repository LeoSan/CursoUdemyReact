//Busqueda
import { useFormik } from 'formik';

//Import librerias
import * as Yup from 'yup';

//Estilos 
import '../styles/styles.css'; 


export const RegisterFormikYup = () => {

    
    
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
        validationSchema:Yup.object({
            nombre:Yup.string().max(15, 'Debe de tener 15 caractere o menos').required('requerido'),
            apellido:Yup.string().max(15, 'Debe de tener 15 caractere o menos').required('requerido'),
            email:Yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
        })    
    }); 


  return (
    <div>
        <h1>Register Yup Page</h1>
        <form noValidate onSubmit={formik.handleSubmit} >
            <label htmlFor='nombre'>Nombre:</label>
            <input
                placeholder='Ingrese nombre'
                type='text'
                {...formik.getFieldProps('nombre')}
            />
            { formik.touched.nombre && formik.errors.nombre && <span>{formik.errors.nombre}</span> }
            

            <label htmlFor='nombre'>Apellido:</label>
            <input
                placeholder='Ingrese nombre'
                type='text'
                {...formik.getFieldProps('apellido')}
            />
            { formik.touched.apellido && formik.errors.apellido && <span>{formik.errors.apellido}</span> }
            <label htmlFor='email'>Email:</label>
            <input
                
                placeholder='Ingrese email'
                type='email'
                {...formik.getFieldProps('email')}
            />
           { formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span> }
            <button type="submit"> Register </button>  
            <button type="button"> Reset Form </button>  
        </form>
    </div>
  )
}
