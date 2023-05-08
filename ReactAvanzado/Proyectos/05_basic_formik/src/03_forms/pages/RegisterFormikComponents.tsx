//Busqueda
import { Formik, Field, Form, ErrorMessage } from 'formik';

//Import librerias
import * as Yup from 'yup';

//Estilos 
import '../styles/styles.css'; 


export const RegisterFormikComponents = () => {

  return (
    <div>
        <h1>Register Components Page</h1>
        
        <Formik 
            initialValues={{
                nombre:'',   //Debe coincidir con el nombre del input 
                apellido:'', //Debe coincidir con el apellido del input 
                email:'',    //Debe coincidir con el email del input 
                terms:false, //Aceptar los terminos y uso del formulario
                jobType:''
            }}
            onSubmit={(values)=>{

            }}
            validationSchema={
                Yup.object({
                    nombre:Yup.string().max(15, 'Debe de tener 15 caractere o menos').required('requerido'),
                    apellido:Yup.string().max(15, 'Debe de tener 15 caractere o menos').required('requerido'),
                    email:Yup.string().email("Field should contain a valid e-mail").max(50).required("E-mail is required"),
                    terms:Yup.boolean().oneOf([true], 'Debes aceptar los terminos.').required("Debe seleccionar terminos"),
                    jobType:Yup.string().required("Campo Obligatorio").notOneOf(['2'], 'Esta opcion no es permitida'),
                })    
            }
        >

            {
                (formik)=>(
                    <Form  >
                    <label htmlFor='nombre'>Nombre:</label>
                    <Field
                        placeholder='Ingrese nombre'
                        type='text'
                        {...formik.getFieldProps('nombre')}
                    />
                    <ErrorMessage name="nombre" component="span"/>
                    
        
                    <label htmlFor='nombre'>Apellido:</label>
                    <Field
                        placeholder='Ingrese nombre'
                        type='text'
                        {...formik.getFieldProps('apellido')}
                    />
                     <ErrorMessage name="apellido" component="span"/>
                    
                    
                    <label htmlFor='email'>Email:</label>
                    <Field
                        
                        placeholder='Ingrese email'
                        type='email'
                        {...formik.getFieldProps('email')}
                    />
                    <ErrorMessage name="email" component="span"/>                     
                    
                    <label htmlFor='email'>Tipo de trabajo:</label>
                    <Field
                        as ='select'
                        name='jobType'                    
                    >
                        <option value="0">Seleccione</option>    
                        <option value="1">Desarrollador</option>    
                        <option value="2">Analista</option>    
                        <option value="3">Diseñador</option>    
                    </Field>    
                    <ErrorMessage name="jobType" component="span"/>                    
                    
                    <label >
                        <Field
                            name ='terms'
                            type='checkbox'
                        />
                        Terminos y condiciones de uso
                    </label>
                    <ErrorMessage name="terms" component="span"/>


                    <button type="submit"> Register </button>  
                    <button type="button"> Reset Form </button>  
                </Form>
                )
            }

        </Formik>

    </div>
  )
}
