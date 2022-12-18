import styled, {css} from "styled-components"

interface iButtonProps{
  buttonSize: 'large'|'medium'|'small';
  buttonColor: 'green'|'gray'
}

export const StyledButton = styled.button<iButtonProps>`
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
        `
      case 'gray':
        return css`
          padding: 10.5px 20px;
        `      
    }
  }}
`