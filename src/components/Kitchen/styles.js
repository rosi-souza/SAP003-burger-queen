import styled from 'styled-components';

export default {
  Wrapper: styled.main`
    background:#F0f0f0;
    padding: 14px;
    .card-kitchen {
      height: 100%;
      width: 50%;
      border: 1px #27ae60 solid;
    }
  `,
  Header: styled.div`
  `,
  List: styled.div`
  text-align: initial;
  `,
  StatusChange: styled.div`
    border-top: 1px solid #294867;
    display: inline-block;
  `,
  Button: styled.button`
    background-color: ${props => props.color};
    padding: 8px;
    color: white;
    width: 40%;
    margin: 4px;
    font-weight: 700;
    border: none;
  `, 
  Title: styled.h2`

  `,
  Description: styled.p`
    font-size: 20px;
    font-weight: 500;
  `,
  Text: styled.span`
    font-size: 20px;  
  `,
    Icon: styled.i`
    font-size: 40px;
    color: #ee5253;
   `,
}
