import styled, {css} from "styled-components"

interface iButtonProps{
  buttonSize: 'large'|'medium'|'small';
  buttonColor: 'green'|'gray'
}

export const StyledButton = styled.button<iButtonProps>`

font-size: var(--font-size-4) ;
font-weight: var(--font-weight-semibold);
border: none;
border-radius: var(--radius);
transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'large':
        return css`
          padding: 20.5px 20px;
        `
      case 'medium':
        return css`
          padding: 10.5px 20px;
        `
      
      case 'small':
        return css`
          padding: 5px 10px;
        `
    }
  }}

${({ buttonColor }) => {
    switch (buttonColor) {
      case 'green':
        return css`
          color: white;
          background-color: var(--color-primary);

          &:hover{
            background-color: var(--color-primary-50);
          }
        `
      case 'gray':
        return css`
          color: var(--color-gray-300);
          background-color: var(--color-gray-100);

          &:hover{
            color: var(--color-gray-100);
            background-color: var(--color-gray-300);
          }
        `      
    }
  }}
`