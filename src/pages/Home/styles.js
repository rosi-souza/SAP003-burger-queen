import styled from 'styled-components';

export default {
  Wrapper: styled.main`
    background:#F0f0f0;
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .card-home { 
      height: 200px;
      width: 300px;
    }
    .text {
      color: white;
      font-size: 48px;
      text-decoration:none;
      display: block;
      text-align: center;
      color: #EE5253;
      font-weight: 700;
      font-weight: lighter;
    }
  `,
  Img: styled.div`
    background-image: url('${props => props.bgImg}');
    width: 100%;
    height: 100%;
    background-position: center; 
    border-radius: 4px;
    :hover{
      opacity: 0.5;
    }
  `,
  Row: styled.div`
    height: 100vh;
  `,
  Col: styled.div`
  `,
  Logo: styled.img`
    padding: 20px;
  `,
  Title: styled.h1`
    font-family: 'Bebas Neue', cursive;
  `
}

