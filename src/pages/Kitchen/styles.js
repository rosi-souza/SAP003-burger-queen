import styled from 'styled-components';

const STATUSCOLOR = {
  PREPARANDO: 'orange',
  PRONTO: 'green'
}

export default {
  Wrapper: styled.main`
    background:#F0f0f0;
    padding: 14px;
    .card-kitchen {
      height: 100%;
      width: 50%;
      border: 1px #95a5a6 solid;
      cursor: default;
    }
    .button-kitchen {
      background-color: #27ae60;
      padding: 8px;
      color: white;
      width: 40%;
      margin: 4px;
      font-weight: 700;
      border: none;
    }
    .button-kitchen:focus {
      background-color: #F0F0F0;
      color: black; 
      font-size: 16px;
    }
  `,
  SectionCard: styled.section`
    .status {
      background-color: ${props => STATUSCOLOR[props.status]};
    }
    .item-status {
      color: white;
    }
  `,
  List: styled.div`
    text-align: initial;
  `,
  StatusChange: styled.div`
    border-top: 1px solid #294867;
    display: inline-block;
  `,
  Title: styled.h2`
    text-align: center;
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
  Error: styled.h3`
    display: inline;
  `,
  Content: styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
}
