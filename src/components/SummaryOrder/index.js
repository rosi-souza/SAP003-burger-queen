import * as React from 'react';
import s from './styles';


const SummaryOrder = ({ items, deleteItem }) => {
   //const total = items.reduce((total, numero) => total + numero.price, 0)
  const total = items.reduce((total, numero) => {
    //console.log('numero', numero);
    const priceExtra = numero.selectedExtra === undefined ? 0 : 1;
    //console.log('numero price', numero.price)
    return ((total + numero.price) + priceExtra)}, 0)
  
 console.log(items)
  return (
    <s.Wrapper>   
      <s.Text>Resumo de pedidos</s.Text>
        {items.map((item, index) => (
          <>
          <div>
        <s.Item>{item.name} {item.selectedExtra && item.selectedExtra.name || ""}</s.Item> <s.Price>- R$ {item.price}</s.Price>
            <s.Icon onClick={() => deleteItem(index)} className="material-icons">close</s.Icon>
          </div>
          </>
        ))}
        <s.Text>Total: R$ {total}</s.Text>

    </s.Wrapper>
  )
};


export default SummaryOrder;
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio
