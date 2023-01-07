import styled from '@emotion/styled'; 

const Boton = styled.a`
    font-weight:700;
    text-transform:uppercase;
    border:1px solid var(--colorBotonA);
    padding:.8rem 2em;
    margin-right: 1rem;
    background-color:${props=>props.bgColor ? '#DA552F' : 'white'};
    color:${props=>props.bgColor ? '#FFF' : '#000'};
    
    &:last-of-type{
        margin-right:0;
    }

    &:hover{
        cursor:pointer;
    }
`;

export default Boton; 