import React, {useState, useEffect} from 'react';
import s from './styles';
import db from '../../utils/firebaseUtils';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Kitchen = () => {

  const [summayOrders, setSummayOrders] = useState([]);

   useEffect(() => {
    db.collection('Order')
      .onSnapshot ((snapshot) => {
        const itensSummaryOrder = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }
        ))
        setSummayOrders(itensSummaryOrder)
      })
  }, []);

  const updateStatus = (status, item) => {
    const time = (Math.abs(new Date() - new Date(item.createdAt)) / 36e5) * 60;
    db.collection('Order').doc(item.id).update({
      status: status,
      timeTotal: ~~(time),
    })
  }; 

  return(
    <s.Wrapper>
      <Header />
      <s.Title>Cozinha</s.Title>
      <s.Content>
        {summayOrders.map((item) => (
          <Card className="card-kitchen">
          <s.SectionCard status={item.status}>
            <div className="status">
              <p className="item-status">{item.status}</p>
            </div>
            <p>Cliente: {item.clientName}</p>
            <p>Hora: {new Date(item.createdAt).toLocaleTimeString()}</p>
          </s.SectionCard>
          <s.List>
            <ul>
              {item.summaryOrder && item.summaryOrder.map((order) => (
                <>
                <li>{order.name}</li>
                <span>{item.selectedExtra.name}</span>
                </>
              ))}
            </ul>
          </s.List>
          <s.StatusChange>
            <s.Description>Alterar status do pedido</s.Description>
            <Button onClick={() => updateStatus("PRONTO", item)} text="PRONTO" className="button-kitchen"/>
          </s.StatusChange>
          </Card>
        ))}
      </s.Content>
    </s.Wrapper>
  )
}

export default Kitchen;
