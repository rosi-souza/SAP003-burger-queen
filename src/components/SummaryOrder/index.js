import * as React from 'react';
import s from './styles';
//mport Card from '../Card';


const SummaryOrder = ({ items }) => {
  const total = items.reduce((total, numero) => total + numero.price, 0)
  console.log(total);
  return (
  <s.Wrapper>   
    <s.Title>Resumo de pedidos</s.Title>
      {items.map((item) => (
        <div>{item.name} - R$ {item.price}</div>
      ))}
      {/* <div>{total}</div> */}
  </s.Wrapper>
  )
}
;

export default SummaryOrder;
