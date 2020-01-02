import * as React from 'react';
import s from './styles';
import Card from '../Card';

const SummaryOrder = ({ items }) => (
<s.Wrapper>   
  <Card bgColor="d3d3d3">
    <s.Title>Resumo de pedidos</s.Title>
      {items.map((item) => (
        <div>{item.name} - {item.price}
        
        </div>

      ))}
  </Card>
</s.Wrapper>
);

export default SummaryOrder;
