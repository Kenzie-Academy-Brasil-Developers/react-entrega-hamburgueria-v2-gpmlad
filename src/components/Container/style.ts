import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  padding: 53px 16px 0 16px;

  @media(min-width: 975px){
    width: 95%;
    max-width: 975px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 53px 0 0 0;
    /*display: flex;
    justify-content: space-between;
    gap: 142px;*/
    
    display: grid;
    grid-template-areas: 'left right';
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 62px;
  }
`