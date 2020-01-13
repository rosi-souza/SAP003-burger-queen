import styled from 'styled-components';

export default {
  Wrapper: styled.main`
    background:#FAB130;
    padding: 14px;
    /* height: 100vh; */
    .card-home { 
      height: 400px;
      width: 50%;
    }
  `,
  Img: styled.div`
    background-image: url('${props => props.bgImg}');
    width: 100%;
    height: 300px;
    background-position: center; 
    border-radius: 4px;
  `,
  Row: styled.div`
  `,
  Col: styled.div`
  `,
}
