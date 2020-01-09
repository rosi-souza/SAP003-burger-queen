import React from 'react';
import s from './styles';

const Button = ({onClick, text}) => (
  <s.Wrapper onClick={onClick}>{text}
  </s.Wrapper>
);

export default Button;
