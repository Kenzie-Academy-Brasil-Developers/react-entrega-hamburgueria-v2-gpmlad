import { CartContext, iCartProducts } from "../../contexts/CartContext";
import { StyledCartProduct } from "../Cart/style";
import trash from '../../images/trash.png'
import { useContext } from "react";


export function CartProduct({id,img,name,quantity}:iCartProducts){
  const {filterCartItemById,quantityUp, quantityDown} = useContext(CartContext)
  return(
    <StyledCartProduct>
              <div>
                <div>
                  <img src={img} alt={name} />
                </div>
                <div>
                  <h2>{name}</h2>
                  <div>
                    <button onClick={()=> quantityDown(id)} disabled={quantity === 1?true:false}>{'<'}</button>
                    <p>{quantity}</p>
                    <button onClick={()=> quantityUp(id)} disabled={quantity === 10?true:false}>{'>'}</button>
                  </div>
                </div>
              </div>
              <button onClick={()=> filterCartItemById(id)}>
                <img src={trash} alt="Lixo" />
              </button>
            </StyledCartProduct>
  )
}