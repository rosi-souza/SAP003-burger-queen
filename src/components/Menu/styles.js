import styled from 'styled-components';

export default{
  Wrapper: styled.div`
    background:#FAB130;
    padding: 14px;
    .card-item {
      width: 176px;
      height: 208px;
      padding: 0;
    }
    .extras {
      color: #05133B;
    }
  `,
  Img: styled.div`
    background-image: url('${props => props.bgImg}');
    width: auto;
    height: 106px;
    background-position: center; 
    border-radius: 4px;
  `,
  Title: styled.h2`
    color: #05133B;
    font-weight: bold;
  `,
  Item: styled.span`
    font-size: 16px;
    color: #05133B;
    font-weight: bold;
  `,
  Input: styled.input`
    display: block;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #efefef;
    margin: 12px 0px;
    margin: auto;
  `,
  ContainerLAteral: styled.div`
    border-radius: 8px;
    border: solid 2px #ececec;
    padding: 8px;
    text-align: center;
  `,
  Modal: styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    height: 400px;
    width: 400px;
    background-color:  rgba(0, 0, 0, 0.7);
    color: white; 
    font-size: 20px;
    border-radius: 8px;
    /* position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); */
  `,
  Content: styled.div`
  `,
  Row: styled.div`
  `,
  Col: styled.div`
  `,
  Container: styled.div`
  `,
}
