import './mylabel.css';

interface MyInputProps {
  /**
   * Configuracion Label
   */
  size?: 'normal' | 'h1' | 'h2'| 'h3';
  label: string;
  color:'primary' | 'secondary' | 'tertiary';
  fontColor?:string;
  /**
   * Configuracion del input 
   */
  backgroundColor?: string;
  colorinput?:'black',
  borderradius:'none' | 'sx' | 'md'| 'lg'| 'all';
  border:'warning' | 'success' | 'info';
  placeholder:string;
  sizeinput:'sx' | 'md' | 'lg';
  type:'text' | 'email' | 'password' | 'date';

}

export const MyInput = ({
    size='normal',
    label='Ejemplo',
    color,
    backgroundColor,
    fontColor,
    border,
    type='text',
    placeholder='Ejemplo',
    sizeinput,
    borderradius,
    colorinput,
    ...props
}:MyInputProps) => {
  return (
    <div>
        <div
         className={ `label ${ size } text-${color}` }
         style={{ color:fontColor } }
         {...props}
        >{label}</div>
        <input  type={type} 
                placeholder={placeholder}
                className={`border-${border} input-${sizeinput}  input-radius-${borderradius}`}
                style={{ backgroundColor:backgroundColor, color:colorinput } }
        />

    </div>
  )
}
