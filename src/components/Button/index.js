import React from 'react';
import s from './styles';

const Button = ({onClick, text, className}) => (
  <s.Wrapper onClick={onClick}className={className}>
    {text}
  </s.Wrapper>
);

export default Button;
