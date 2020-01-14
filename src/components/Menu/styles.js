import styled from 'styled-components';

export default{
  Wrapper: styled.main`
    background:#F0f0f0;
    padding: 14px;
    .card-item {
      width: 176px;
      height: 208px;
      padding: 0;
    }
    .extras {
      color: #05133B;
    }
    .card-filter {
      border-color: #ee5253;
      color: #05133B;
    }
    .button-add {
      background: white;
      color: #ee5253;
      border: solid 1px #ee5253;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
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
  ContainerSide: styled.div`
    border-radius: 8px;
    border: solid 2px white;
    padding: 8px;
    text-align: center;
  `,
  Modal: styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    height: 200px;
    width: 400px;
    background-color: white;
    color: white; 
    font-size: 20px;
    border-radius: 8px;
    margin: auto;
  `,
  Content: styled.div`
  `,
  Row: styled.div`
  `,
  Col: styled.section`
  `,
  Container: styled.div`
     display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  Checkmark: styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    ::after{
      content: "";
      position: absolute;
      display: none;
    }
  `,
  SelectItem: styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
  `,
  Icon: styled.i`
   font-size: 40px;
   color: #ee5253;
  `,
}
