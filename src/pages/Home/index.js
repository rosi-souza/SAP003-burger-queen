import React from 'react';
import Card from '../../components/Card';
import s from './styles'
import { Link } from 'react-router-dom';
import hall from '../../utils/Images/hall.jpeg'
import kitchen from '../../utils/Images/kitchen.jpeg';

const Home = () => (
  <s.Wrapper>
    <s.Row clasName="row">
        <Card className="card-home">
          <Link to="/salao">
            <s.Img bgImg={hall} />
          </Link>
        </Card>
        <Card className="card-home">
          <Link to="/cozinha">
          <s.Img bgImg={kitchen} />
          </Link>
        </Card>
    </s.Row>
  </s.Wrapper>
)


export default Home;
