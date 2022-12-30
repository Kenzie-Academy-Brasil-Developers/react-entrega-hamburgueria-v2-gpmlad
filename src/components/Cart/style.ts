import styled from "styled-components";

export const StyledModal = styled.div`
  
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 2;

  min-height: 100vh;
  width: 100%;

  background-color: rgba(51,51,51,0.5 );
  
`

export const StyledModalHeader= styled.div`

  width: min(92%, 500px);
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 13px 18px;
  color: white;
  

  h2{
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-bold);
  }

  button{
    background-color: transparent;
    border: none;
    color: white;
    opacity: 0.7;
  }
  
  button:hover{
    opacity: 1;
    font-weight: bolder;
  }
  `

export const StyledModalContentItems = styled.div`
  width: min(92%, 500px);
  background-color: white;
  border: none;
  border-radius: 0 0 5px 5px;
  padding: 50px 20px;

  ul{
    border-bottom: 2px solid var(--color-gray-100);
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-bottom: 18px;
    max-height: 40vh;
    overflow-y: scroll;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    font-size: 24px;
  }

  & > div h3{
    color: var(--color-gray-600);
  }
  
  & > div span{
    color: var(--color-gray-300);
  }

  & > button{
    width: 100%;
  }
`


export const StyledModalContentEmpty= styled.div`

  width: min(92%, 500px);
  background-color: white;
  border: none;
  border-radius: 0 0 5px 5px;
  padding: 50px 20px;
  text-align: center;
  

  h3{
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-bold);
  }

  p{
    margin-top: 8px;
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-regular);
    opacity: 0.5;
  }`

export const StyledCartProduct = styled.li`
  display: flex;
  justify-content: space-between;

  h2{
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-bold);
  }

  & > div{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & > div div:first-child{
    background-color: var(--color-gray-100);
    width: 80px;
    border-radius: 5px;
  }
  
  & > div img{
    width: 100%;
  }

  & > div div:last-child{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 200px;
  }

  & > div div:last-child div{
    display: flex;
    flex-direction: row;
    gap: 0;
    height: 34px;
    align-items: center;
    background-color: var(--color-gray-100);
    border-radius: 5px;
    width: 105px;
  }

  & > div div:last-child div button{
    width: 30px;
    height: 100%;
    color: var(--color-secondary);
    background-color: transparent;
    border: none;
  }

  & > div div:last-child div p{
    background-color: white;
    width: 40px;
    height: 80%;
    text-align: center;
    padding-top: 4px;
  }

  & > button{
    border: none;
    background-color: transparent;
    height: fit-content;
  }
`