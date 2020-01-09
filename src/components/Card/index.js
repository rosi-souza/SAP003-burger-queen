import * as React from 'react';
import s from './styles';

//COMPONENTE CARDS QUE USO NOS ITENS DO CARDAPIO
const Card = (props) => (
<>
  <s.Wrapper 
    bgColor={props.bgColor} 
    onClick={props.onClick} 
    className={props.className}
  >
    {props.children}
  </s.Wrapper>
</>
);

export default Card;
