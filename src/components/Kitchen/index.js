import React, {useState, useEffect} from 'react';
import Card from '../Card';
import s from './styles';
import { Link } from 'react-router-dom';
import db from '../../utils/firebaseUtils';

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
        console.log(itensSummaryOrder) 
      })
  }, []);

  const updateStatus = (status, item) => {
    const time = (Math.abs(new Date() - new Date(item.createdAt)) / 36e5) * 60;
    const newStatus = setTimeout(() => "Enviando pedido para o garçom...", 3000);
   
    db.collection('Order').doc(item.id).update({
      status: newStatus,
      timeTotal: ~~(time),
    })
    // console.log(newStatus)
  }; 

  return(
    <s.Wrapper>
       <Link to="/home">
        <s.Icon className="material-icons">house</s.Icon>
      </Link>
      <s.Title>Cozinha</s.Title>
      {summayOrders.map((item) => (
        <Card className="card-kitchen">
        <s.Header>
          <p>{item.status}</p>
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
          <s.Button onClick={() => updateStatus(item)} color="#27ae60">PRONTO</s.Button>
        </s.StatusChange>
        </Card>
      ))}
    </s.Wrapper>
  )
}

export default Kitchen;
