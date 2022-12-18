import styled from "styled-components";

export const StyledInput = styled.fieldset`
  
  border: none;
  transition: 1s ease;
  
  legend{
    transition: 1s ease;
    display: none;
  }

  &:hover{
    border: 1px solid black;
    border-radius: 8px;
  }

  &:hover legend{
    
    display: unset;
    margin-left: 15px;
    font-size: 12px;
  }

  input{
    border-radius: 8px;
    background-color: var(--color-gray-0);
    border: none;
    padding: 20.5px 15px;
    transition: 1s ease;
    outline: none;
  }

  &:hover input{
    background-color: transparent;
    padding: 8.5px 15px 12.5px 15px;
  }
`