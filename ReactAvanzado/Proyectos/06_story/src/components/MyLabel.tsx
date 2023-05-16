import './mylabel.css';

interface MyLabelProps {
  size?: 'normal' | 'h1' | 'h2'| 'h3';
  label: string;
  color:'primary' | 'secondary' | 'tertiary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  size = 'normal',
  label,
  color='primary',
  backgroundColor,
  ...props
}: MyLabelProps) => {
  
  return (
    <span
      className={ `${ size } text-${color}` }
      style={{  backgroundColor } }
      {...props}
    >
      {label}
    </span>
  );
};
