import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-gray-0);
  padding: 28px 16px;

  div div:nth-child(2){
    display: flex;
    gap: 20px;
  }

  button{
    border: none;
    background-color: transparent;
  }
`