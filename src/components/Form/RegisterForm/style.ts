import styled from "styled-components";

export const StyledRegisterForm = styled.div`
  border: 2px solid var(--color-gray-0);
  border-radius: var(--radius-2);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  padding: 16px 18px;
  margin-top: 14px;

  display: flex;
  flex-direction: column;

  gap: 19px;

  grid-area: right;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div a {
    text-decoration: underline;
    color: var(--color-gray-300);
    font-size: var(--font-size-5);
  }

  h2{
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-semibold);
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  p{
    text-align: center;
    color: var(--color-gray-300);
    font-size: var(--font-size-5);
  }

  span{
    color: var(--color-negative);
    font-size: var(--font-size-6);
  }

  button {
    width: 100%;
  }
  @media(min-width: 975px){
    width: 100%;
    height: fit-content;
  }
`