import styled from 'styled-components';

export default {
  Wrapper: styled.main`
    background:#F0f0f0;
    padding: 14px;
    /* height: 100vw; */
  
    .card-home { 
      height: 400px;
      width: 50%;
      
    }
  `,
  Img: styled.div`
    background-image: url('${props => props.bgImg}');
    width: 100%;
    height: 100%;
    background-position: center; 
  er-radius: 4px;
  `,
  Row: styled.div`
    display: flex;
    height: 100vh;
  
  `,
  Col: styled.div`
      align-self: flex-start;
  `,
}
