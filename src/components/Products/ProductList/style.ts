import styled from 'styled-components'

export const StyledProductList = styled.main`
  padding: 0 16px;

  p {
    padding-top: 30px;
    color: var(--color-gray-300);
    padding-bottom: 26px;
  }

  span {
    color: var(--color-gray-50);
  }

  ul{
    list-style: none;
    padding-top: 15px;
    overflow-x: scroll;
    display: flex;
    gap: 20px;
    padding-bottom: 15px;
  }

  @media(min-width: 975px){
    padding: 0 7.5%;
    ul{
      flex-wrap: wrap;
      overflow-y: scroll;
      justify-content: center;
    }
  }
`
