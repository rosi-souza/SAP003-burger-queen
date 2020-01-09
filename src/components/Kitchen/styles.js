import styled from 'styled-components';

export default {
  Wrapper: styled.section`
    .card-kitchen {
      height: 100%;
      width: 50%;
    }
  `,
  Header: styled.div`
    
    /* background-color: white; */
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
}
