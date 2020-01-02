import React, {useState, useEffect} from 'react';
import s from './styles';
import firebase from '../../utils/firebaseUtils'
import Card from '../Card';
import SummaryOrder from '../SummaryOrder';

const Menu = (props) => {
  let [menu, setMenu] = useState([]);
  let [filteredMenu, setFilteredMenu] = useState([]);
  const [summaryOrder, setSummaryOrder] = useState([]);
  
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
      console.log(filteredMenu)
      setFilteredMenu(filteredMenu);
    }
    else if (typeMenu === 'Lanches') {
      const filteredMenu = menu.filter(element => element.breakfast === false)
      setFilteredMenu(filteredMenu);
  
    }
  }


  return (
    <s.Wrapper>
      <Card onClick={() => filterItens('Café da manhã')}>Café da manhã</Card>
      <Card onClick={() => filterItens('Lanches')}>Lanche</Card>
      <h4>Cardapio</h4>
      {filteredMenu.map((item) => (
        <Card  onClick={() => setSummaryOrder([...summaryOrder, item])}>
          {item.name}
          <s.Price>R$ {item.price}</s.Price>
        </Card>
      ))}
      <SummaryOrder items={summaryOrder}/>
    </s.Wrapper>
  )
}

export default Menu;
//exportar csv - xml json
