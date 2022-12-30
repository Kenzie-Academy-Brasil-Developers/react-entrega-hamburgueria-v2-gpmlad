import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  
  background-color: var(--color-gray-0);
  padding: 28px 16px;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }

  div:nth-child(2){
    display: flex;
    gap: 20px;
  }

  button{
    border: none;
    background-color: transparent;
    position: relative;
  }

  input{
    margin-top: 8px;
  }

  div img ~ div {
    background-color: var(--color-primary);
    padding: 5px 5px;
    border: none;
    border-radius: 7px;
    position: absolute;
    top: -14px;
    right: -11px;
    color: white;
    font-weight: var(--font-weight-bold);
  }

  @media(min-width: 975px){
    padding: 28px 7.5%;
  }
`

export const StyledInput = styled.div`
  max-width: 385px;
  align-self: center;
  width: 100%;
  display: flex;

  border: 2px solid var(--color-gray-100);
  border-radius: var(--radius);

  padding: 10px;
  justify-content: space-between;
  background-color: white;

  &:focus,
  &:target {
    border: 2px solid var(--color-gray-600);
    transition: 0.4s;
  }

  &:has(input:focus){
    border: 2px solid var(--color-gray-600);
    transition: 0.4s;
  }

  input {
    border: none;
    width: 60%;
    outline: none;
    color: var(--color-gray-300);
  }

  input::placeholder {
    color: var(--color-gray-300);
  }

  button{
    background-color: var(--color-primary);
  }
`
