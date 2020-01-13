import * as React from 'react';
import s from './styles';


const SummaryOrder = ({ items, deleteItem }) => {
  const total = items.reduce((total, numero) => total + numero.price, 0)
  
  
  return (
    <s.Wrapper>   
      <s.Text>Resumo de pedidos</s.Text>
        {items.map((item, index) => (
          <>
          <div>
            <s.Item>{item.name}</s.Item> <s.Price>- R$ {item.price}</s.Price>
            {/* {item.extras.map((elem) => (
              <div>
              <s.Item>Extra: {elem.name}</s.Item> - <s.Price>R$ {elem.price},00</s.Price>
              </div>
            ))} */}
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
