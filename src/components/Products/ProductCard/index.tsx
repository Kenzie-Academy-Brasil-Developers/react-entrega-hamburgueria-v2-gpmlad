import { iProducts } from "../../../contexts/UserContext"
import { StyledButton } from "../../Button/style"
import { StyledProduct } from "./style"

export function ProductCard({id,name, category, price, img}:iProducts) {

  return(
    <StyledProduct>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="description">
        <h3 className="heading3">{name}</h3>
        <p className="caption">{category}</p>
        <span className="regularTextSemi">{`R$ ${price.toFixed(2)}`}</span>
        <StyledButton buttonColor="green" buttonSize="medium" onClick={() => console.log(id)}>Adicionar</StyledButton>
      </div>
    </StyledProduct>
  )
}