import LogoApp from '../map-logo.svg'; 


export const Logo = () => {
  return (
    <img src={LogoApp} 
        alt="No hay App logo"
        style={{
            position:'fixed',
            bottom:'20px',
            left:'0px',
            width:'130px'
        }} />
  )
}
