import logo from '../../images/logo.png'
import bag from '../../images/shopping-bag.png'
import { StyledContainer } from './style'
import decorative from '../../images/decorative.png'

export function LogoCard(){
  return (
  <StyledContainer>
    <div>
      <img src={logo} alt="Burguer Kenzie" />
    </div>
    <div>
      <div>
        <img src={bag} alt="" />
      </div>
      <p>A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b> ingredientes.</p>
    </div>
    <img src={decorative} alt="" />
  </StyledContainer>
  )
}