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
    .card-filter {
      :hover{
        color: white;
        background-color: #ee5253;
        font-size: 20px;
      }
    }
    .card-filter {
      :visited {
        color: white;
        background-color: #ee5253;
        font-size: 20px;
      }
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
    text-align: center;
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
  Row: styled.div`
  `,
  Col: styled.section`
  `,
  Container: styled.div`
  `,
  SelectItem: styled.input`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance:none;
    width: 24px;
    height: 24px;
    background: #eeeeee;
    box-shadow: inset 0 0 0 .4em white,
      0 0 0 .3em; 
    border-radius: 50%;
    transition: .2s;
    cursor:pointer;
    color: #363945;
    vertical-align: bottom;
    margin: 4px;
    :hover{
      background: #ee5253;
      box-shadow: inset 0 0 0 .6em white,
      0 0 0 .3em;
    }
    :checked{
      background: #ee5253;
      box-shadow: inset 0 0 0 .4em white,
        0 0 0 .3em #ee5253;
    }
  `,
  Erro: styled.p`
    font-size: 20px;
    color: #FF0000;
    font-weight: bolder;
  `,
  Extras: styled.span`
    font-size: 18px;
    color: #05133B;
    font-weight: bold;
  `,
  ContainerCard: styled.section`
    display: flex;
    justify-content: space-around;
  `,
}
