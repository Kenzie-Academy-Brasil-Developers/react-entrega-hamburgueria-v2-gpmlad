import styled from 'styled-components'

export const StyledProduct = styled.li`
  border-radius: var(--radius-2);
  border: 2px solid var(--color-gray-100);
  max-width: 300px;
  min-width: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover{
    border: 2px solid var(--color-primary);
    transition: 0.2s;
  }

  .image {
    background-color: var(--color-gray-100);
    width: 100%;
    height: 150px;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .description{
    display: flex;
    flex-direction: column;
    padding: 20px 18px 23px 20px;
    gap: 14px;
  }

  .description h3{
    color: var(--color-gray-600);
  }

  .description p {
    padding: 0;
    color: var(--color-gray-300);
  }

  .description span{
    color: var(--color-primary);
  }

  .description button{
    width: fit-content;
  }
`
