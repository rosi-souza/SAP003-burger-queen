import React, {useState, useEffect} from 'react';
import firebase from '../../utils/firebaseUtils'
import Card from '../Card';
import s from './styles';

const Kitchen = () => {
  const [summayOrders, setSummayOrders] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Order')
      .onSnapshot ((snapshot) => {
        const itensSummaryOrder = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }
        ))
        setSummayOrders(itensSummaryOrder)
        console.log(itensSummaryOrder) 
      })
  }, []);

  const updateStatus = (status, item) => {
    const time = (Math.abs(new Date() - new Date(item.createdAt)) / 36e5) * 60;
    console.log(time)
    firebase.firestore().collection('Order').doc(item.id).update({
      status,
      timeTotal: ~~(time)
    })
  }; 

  return(
    <s.Wrapper>
      <s.Title>Cozinha</s.Title>
      {summayOrders.map((item) => (
        <Card className="card-kitchen">
        <s.Header>
          {item.status}
          <p>Cliente: {item.clientName}</p>
          <p>Hora: {new Date(item.createdAt).toLocaleTimeString()}</p>
        </s.Header>
        <s.List>
          <ul>
            {item.summaryOrder && item.summaryOrder.map((order) => (
              <li>{order.name}</li>
              ))}
          </ul>
        </s.List>
        <s.StatusChange>
          <s.Description>Alterar status do pedido</s.Description>
          <s.Button onClick={() =>updateStatus("PRONTO", item)} color="#27ae60">PRONTO</s.Button>
        </s.StatusChange>
        </Card>
      ))}
    </s.Wrapper>
  )
}

export default Kitchen;
