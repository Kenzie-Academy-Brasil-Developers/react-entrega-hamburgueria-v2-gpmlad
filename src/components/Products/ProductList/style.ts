import styled from 'styled-components'

export const StyledProductList = styled.main`
  padding: 0 16px;

  p {
    padding-top: 30px;
    color: var(--color-gray-100);
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

  @media(min-width: 1024px){
    ul{
      flex-wrap: wrap;
      overflow-y: scroll;
    }
  }
`
