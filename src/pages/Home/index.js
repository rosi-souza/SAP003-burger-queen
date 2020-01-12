import React from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
return(
  <>
    <Card>
      <Link to="/salao" />
    </Card>
    <Card>
      <Link to="/cozinha" />
    </Card>
  </>
)
};

export default Home;
