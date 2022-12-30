import styled from "styled-components";

export const StyledContainer= styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  div:nth-child(2){
    border: 1px solid var(--color-gray-100);
    border-radius: var(--radius-2);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 18px 14px;
    gap: 19px;
    align-items: center;

    div{
      border: none;
      border-radius: var(--radius-2);
      background: rgba(39, 174, 96, 0.1);
      padding: 16px;
    }

    p{
      color: var(--color-gray-300);
      font-size: var(--font-size-5);
      line-height: 22px;
    }

    b{  
      color: var(--color-gray-600);
    }
  }

  & > img{
    display: none;
  }

  @media(min-width: 975px){
    width: 462px;

    & > img{
      display: unset;
      width: 182px;
    }
  }
`