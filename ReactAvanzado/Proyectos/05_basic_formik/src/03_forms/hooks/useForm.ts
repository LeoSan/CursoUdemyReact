import { useState } from "react";
import { initStateFormRegister } from "../interfaces/interfaces";


export const useForm = (initState:initStateFormRegister) => {


//Declaro State
const [formData, setFormData] = useState(initState);

// Desestructuro 
//const {name, email, password1, password2} = formData;

//Forma de editar tu valores en el formulario 
const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
  
  setFormData(prev => ({
      ...prev,
      [event.target.name]:event.target.value
  }));
}

const resetForm = ()=>{
  setFormData({...initState})
}
  

const isValidEmail = ( email: string ) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
  return {
    //Propeties 
    ...formData,
    formData,
    //Methos 
    setFormData,
    onChange,
    resetForm,
    isValidEmail
  }
}
