import React, {useState, useEffect} from 'react';
import s from './styles';
import firebase from '../../utils/firebaseUtils'
import Card from '../Card';
import SummaryOrder from '../SummaryOrder';
import Button from '../Button';

const Menu = () => {
  let [menu, setMenu] = useState([]);
  let [filteredMenu, setFilteredMenu] = useState([]);
  let [summaryOrder, setSummaryOrder] = useState([]);
  const [clientName, setClientName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [isModalOpen, setModal] = useState(false);
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Menu')
      .onSnapshot ((snapshot) => {
        const itensMenu = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }
        ))
        setMenu(itensMenu)
        setFilteredMenu(itensMenu)
      })
  }, []);

  const filterItens = (typeMenu) => {  
    if (typeMenu === 'Café da manhã'){ 
      const filteredMenu = menu.filter(element => element.breakfast === true)
      setFilteredMenu(filteredMenu);
    
    }
    else if (typeMenu === 'Lanches') {
      const filteredMenu = menu.filter(element => element.breakfast === false)
      setFilteredMenu(filteredMenu);
    }
  }

  const deleteSummaryItem = (index) => {
    summaryOrder = summaryOrder.filter((_, i) => i !== index)
    setSummaryOrder(summaryOrder)
  };

  const sendOrder = () => {
    const data = {
      summaryOrder,
      status: 'AGUARDANDO',
      clientName,
      tableNumber,
      createdAt: Date.now()
    }

      firebase.firestore().collection('Order').add(data).then(() => {
        setClientName('');
        setTableNumber('');
        setSummaryOrder([]);
      })
    setModal(false)
  };

  const additionalCheck = (item) => {
    if (item.extras) {
      setModal(true)
      setExtras(item)
    } else {
      setSummaryOrder([...summaryOrder, item])
      setModal(false)
    }
  };

    const updatePrice = () => {

      // console.log(...summaryOrder)
      extras.price = extras.price + 1
      // console.log(extras.map(elem => elem.name))
      console.log(extras.price)
      setSummaryOrder([...summaryOrder, extras])
      setModal(false)
    }

  
  return (
    <s.Wrapper>
      <s.Modal open={isModalOpen}>
        {extras.name}
        {extras.extras && extras.extras.map((elem) => 
          <div> 
            <input onChange={() => console.log(elem.price + extras.price)}type="radio" name="extras" value={elem} />
            <label className="extras">{elem.name}</label>
          </div>
        )}
        <Button onClick={() => updatePrice()} text="Adicionar"/>
        <Button onClick={() => sendOrder()} text="Cancelar"/>
      </s.Modal>
      <Card onClick={() => filterItens('Café da manhã')}>Café da manhã</Card>
      <Card onClick={() => filterItens('Lanches')}>Lanche</Card>
      <s.Title>Cardapio</s.Title>
      <s.Row className="row">
        <s.Col className="col-md-8">
            {filteredMenu.map((item, index) => (
            // <Card key={index} className="card-item" onClick={() => setSummaryOrder([...summaryOrder, item])}></Card>
              <Card key={index} className="card-item" onClick={() => additionalCheck(item)}>
                <s.Img bgImg={item.img} alt=""></s.Img>
                <s.Item>{item.name}</s.Item>
                <s.Item>R$ {item.price},00</s.Item>
              </Card>
            ))}
        </s.Col>
        <s.Col className="col-md-4">
          <s.ContainerLAteral>
            <SummaryOrder items={summaryOrder} deleteItem={(index) => deleteSummaryItem(index)}/>
            <span>Digite o nome do cliente</span>
            <s.Input onChange={(e) => setClientName(e.currentTarget.value)}/>
            <span>Digite o numero da mesa</span>
            <s.Input type="number" onChange={(e) => setTableNumber(e.currentTarget.value)}/>
            <Button text="Enviar" onClick={() => sendOrder()}/>
          </s.ContainerLAteral>
        </s.Col>
      </s.Row>
    </s.Wrapper>
  )
}

export default Menu;
