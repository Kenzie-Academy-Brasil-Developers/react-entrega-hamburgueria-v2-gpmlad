import logo from '../../images/logo.png'
import logout from '../../images/logout.png'
import cart from '../../images/cart.png'
import searchIcon from '../../images/search.png'
import { StyledHeader, StyledInput } from './style'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'
import { StyledButton } from '../Button/style'

export function Header(){
  const {setSearch ,search, setSearchText,showProducts, searchText} = useContext(CartContext)

  const {userLogout} = useContext(UserContext)

  return(
    <StyledHeader>
      <div>
      <div>
        <img src={logo} alt="Burguer Kenzie" />
      </div>
      <div>
        <button onClick={() => setSearch(!search)}>
          <img src={searchIcon} alt="Procurar" />
        </button>
        <button>
          <img src={cart} alt="Carrinho" />
        </button>
        <button onClick={userLogout}>
          <img src={logout} alt="Sair" />
        </button>
      </div>
      </div>
      {
        search &&
      
      <StyledInput>
        <input onChange={event => {
          showProducts(event.target.value)
          setSearchText(event.target.value)
        }} placeholder="Digitar Pesquisa" type="text" value={searchText}/>
        <StyledButton buttonColor='green' buttonSize='medium' >Pesquisar</StyledButton>
      </StyledInput>
      }
    </StyledHeader>
  )
}