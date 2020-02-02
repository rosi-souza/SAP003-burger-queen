import React from 'react';
import Card from '../../components/Card';
import s from './styles'
import { Link } from 'react-router-dom';
import hall from '../../utils/Images/hall.jpeg'
import kitchen from '../../utils/Images/kitchen.jpeg';
import logo from '../../utils/Images/teste.png';

const Home = () => (
  <s.Wrapper>
    <s.Logo src={logo} alt="" />
    <s.Row className="row">
      <s.Col> 
        <span className="text">Hall</span>
      <Card className="card-home">
        <Link to="/salao">
          <s.Img bgImg={hall}></s.Img>
        </Link>
      </Card>
      </s.Col>
      <s.Col>
        <span className="text">Cozinha</span>
        <Card className="card-home">
          <Link to="/cozinha">
          <s.Img bgImg={kitchen}></s.Img>
          </Link>
        </Card>
      </s.Col>
    </s.Row>
  </s.Wrapper>
);

export default Home;
