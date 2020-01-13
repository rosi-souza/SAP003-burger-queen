import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    text-align:center;
    color: #2c3e50;
    cursor: pointer;
    padding: 12px;
    margin: 8px;
    border-radius: 4px;
    border: 1px solid white;
    background-color: ${props => props.bgColor || "#ecf0f1"};
    width: 120px;
    height: 80px;
    vertical-align: middle;
    display: inline-grid;
  `, 
}
