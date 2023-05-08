
import { useForm } from '../hooks/useForm';


//Estilos 
import '../styles/styles.css'; 
export const RegisterPage = () => {

    const {formData, name,email,password1,password2, 
        onChange, resetForm, isValidEmail
        } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
        });
//Metodos 
const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(formData);
}

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={(e)=>onSubmit(e)}>
            <input 
                name='name'
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>onChange(e)}
                className={`${name.trim().length <= 0 && 'has-error'}` }
            />
            { name.trim().length <=0  && <span>Este campo es obligatorio</span> }    
            <input 
                name='email'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>onChange(e)}
                className={`${ !isValidEmail(email) && 'has-error'}` }
            />    
            { (!isValidEmail(email))?<span>Este campo es obligatorio</span>:null }    
            <input 
                name='password1'
                type="password"
                placeholder="password"
                value={password1}
                onChange={(e)=>onChange(e)}
                className={`${password1.trim().length <= 0 && 'has-error'}` }
            />  
            { password1.trim().length <=0  && <span>Este campo es obligatorio</span> }      
            <input 
                name='password2'
                type="password"
                placeholder="Rppeat Password"
                value={password2}
                onChange={(e)=>onChange(e)}
                className={`${password2.trim().length <= 6 && 'has-error'}` }
            />  
            { password2.trim().length <=0  && <span>Este campo es obligatorio</span> }      
            { password1.trim().length > 0 && password1 !== password2 && <span>Ambos password deben ser iguales</span> }      
            <button type="submit"> Register </button>  
            <button type="button" onClick={resetForm}> Reset Form </button>  
        </form>    
    </div>
  )
}
