import './mylabel.css';

interface MyLabelProps {
  size?: 'normal' | 'h1' | 'h2'| 'h3';
  label: string;
  color:'primary' | 'secondary' | 'tertiary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  fontColor?:string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  size = 'normal',
  label,
  color='primary',
  backgroundColor,
  fontColor,
  ...props
}: MyLabelProps) => {
  
  return (
    <span
      className={ `label ${ size } text-${color}` }
      style={{ color:fontColor, backgroundColor:backgroundColor } }
      {...props}
    >
      {label}
    </span>
  );
};
