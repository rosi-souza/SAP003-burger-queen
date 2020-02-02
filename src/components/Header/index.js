import React from 'react';
import s from './styles';
import { Link } from 'react-router-dom';
import logo from '../../utils/Images/teste.png'

const Header = () => (
  <>
    <s.Logo src={logo} />
    <Link to="/home">
      <s.Icon className="material-icons">house</s.Icon>
    </Link>
  </>
);

export default Header;
