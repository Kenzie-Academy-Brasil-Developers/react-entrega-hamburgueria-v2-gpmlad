import styled from "styled-components";

export const StyledInput = styled.fieldset`
  width: 100%;
  border: none;
  transition: 0.2s ease;
  
  legend{
    transition: 0.2s ease;
    display: none;
    color: var(--color-gray-300);
  }

  &:hover,
  &:focus{
    border: 2px solid black;
    border-radius: 8px;
  }

  &:hover legend,
  &:focus legend{
    
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
    width: 100%;
  }

  &:hover input,
  &:focus input{
    background-color: transparent;
    padding: 8.5px 15px 12.5px 15px;
  }
`