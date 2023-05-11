import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    //Genero el Valor Inicial de manera dinamica 
    initialValues[ input.name ] = input.value;
    
    //Si no viene validaciones este no entra a la linea 17 
    if ( !input.validations ) continue;

    //Genero mi Yup tipo string para elimentarlo dinamicamente con el Json
    let schema = Yup.string()

    //Genero ciclo for ya que puede tener varias reglas 
    for (const rule of input.validations ) {
        //Valido las reglas obligatorias
        if ( rule.type === 'required' ) {
            schema = schema.required(rule.description);
        }

        //Valido las reglas minLength
        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, rule.description);
        }

        //Valido las reglas email
        if ( rule.type === 'email' ) {
            schema = schema.email( rule.description);
        }

        // ... otras reglas
    }
    //Alimento el esquema con las reglas dinamicas 
    requiredFields[input.name] = schema;
}

//Alimento el Yup.Object con el string de reglas dinamicas 
const validationSchema = Yup.object({ ...requiredFields });


export const RegisterFormikDinamico = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ (values) => {
                    console.log(values)
                }}
            >
                { (formik) => (
                    <Form noValidate>
                        { formJson.map( ({ type, name, placeholder, label, options }) => {

                            if ( type === 'input' || type === 'password' || type === 'email' ) {
                                return <MyTextInput 
                                            key={ name }
                                            type={(type as any)}
                                            name={ name } 
                                            label={ label } 
                                            placeholder={ placeholder } />

                            } else if ( type === 'select' ) {
                                return (
                                    <MySelect 
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( ({ id, label }) => (
                                                <option key={ id } value={ id }>{ label }</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }
                        })}
                            
                        <button type="submit">Registrar</button>
                    
                    </Form>
                )}
            </Formik>

        </div>
    )
}