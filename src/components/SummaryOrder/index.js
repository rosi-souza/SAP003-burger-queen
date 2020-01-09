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
            <s.Icon onClick={() => deleteItem(index)} className="material-icons">close</s.Icon>
          </div>
          </>
        ))}
        <s.Text>Total: R$ {total}</s.Text>

    </s.Wrapper>
  )
};

export default SummaryOrder;
