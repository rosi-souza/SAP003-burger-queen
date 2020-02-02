import * as React from 'react';
import s from './styles';

const Card = ({ bgColor, onClick, className, children }) => (
  <>
    <s.Wrapper 
      bgColor={bgColor} 
      onClick={onClick} 
      className={className}
    >
      {children}
    </s.Wrapper>
  </>
);

export default Card;
