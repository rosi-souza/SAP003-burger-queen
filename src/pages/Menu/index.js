import React, {useState, useEffect} from 'react';
import s from './styles';
import db from '../../utils/firebaseUtils';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SummaryOrder from '../../components/SummaryOrder';
import Header from '../../components/Header';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  let [summaryOrder, setSummaryOrder] = useState([]);
  const [clientName, setClientName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [isModalOpen, setModal] = useState(false);
  const [extras, setExtras] = useState([]);
  const [selectedExtra, setSelectedExtra] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    db.collection('Menu')
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
      const filteredMenu = menu.filter(element => element.breakfast)
      setFilteredMenu(filteredMenu);
    
    }
    else if (typeMenu === 'Lanches') {
      const filteredMenu = menu.filter(element => !element.breakfast)
      setFilteredMenu(filteredMenu);
    }
  }

  const deleteSummaryItem = (index) => {
    summaryOrder = summaryOrder.filter((_, i) => i !== index)
    setSummaryOrder(summaryOrder)
  };

  const sendOrder = (item) => {
    const data = {
      summaryOrder,
      status: 'PREPARANDO',
      clientName,
      tableNumber,
      createdAt: Date.now(),
      selectedExtra: item.extras
    }
    if(!clientName && !tableNumber) {
      return setErro("Preencha os dados")
    } else {
      db.collection('Order').add(data).then(() => {
        setClientName('');
        setTableNumber('');
        setSummaryOrder([]);
        setErro('')
      })
    }
  };
console.log(selectedExtra)
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
    setSummaryOrder([...summaryOrder, {...extras, selectedExtra: selectedExtra}])
    setModal(false)
  }

  const cancelExtras = () => {
    setSummaryOrder([...summaryOrder, extras])
    setModal(false)
  }

  return (
    <s.Wrapper>
      <Header />
      <s.Title>Cardapio</s.Title>
        <Card className="card-filter" onClick={() => filterItens('Café da manhã')}>
          Café da manhã
        </Card>
        <Card className="card-filter" onClick={() => filterItens('Lanches')}>
          Lanche
        </Card>
      <s.Row className="row">
        <s.Col className="col-md-6">
          {filteredMenu.map((item, index) => (
            <Card key={index} className="card-item" onClick={() => additionalCheck(item)}>
              <s.Img bgImg={item.img} alt=""></s.Img>
              <s.Item>{item.name}</s.Item>
              <s.Item>R$ {item.price},00</s.Item>
            </Card>
          ))}
        </s.Col>
        <s.Col classNae="col-md-6 col-xs-6">
          <s.ContainerSide>
            <s.Modal open={isModalOpen}>
              {extras.name} 
              {extras.extras && extras.extras.map((elem) => 
                <s.Container> 
                  <s.SelectItem onChange={() => setSelectedExtra(elem)} type="radio" name="extras" value={elem} />
                  <s.Extras>
                    <label className="extras">{elem.name.toUpperCase()}</label>
                  </s.Extras>
                </s.Container>
              )}
              <Button onClick={() => updatePrice()} text="Adicionar"/>
              <Button className="button-add"onClick={() =>  cancelExtras()} text="Sem adicional" />
            </s.Modal>
            <SummaryOrder items={summaryOrder} deleteItem={(index) => deleteSummaryItem(index)}/>
            <span>Digite o nome do cliente</span>
            <s.Input value={clientName} onChange={(e) => setClientName(e.currentTarget.value)}/>
            <span>Digite o numero da mesa</span>
            <s.Input value={tableNumber} type="number" onChange={(e) => setTableNumber(e.currentTarget.value)}/>
              <s.Erro>{erro}</s.Erro>
            <Button text="Enviar" onClick={() => sendOrder()}/>
          </s.ContainerSide>
        </s.Col>
      </s.Row>
    </s.Wrapper>
  )
};

export default Menu;
