import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledButton } from "../Button/style";
import { StyledModal, StyledModalContentEmpty, StyledModalContentItems, StyledModalHeader } from "./style";

import { CartProduct } from "../CartProduct";

export function Modal(){
  const {cardList} = useContext(CartContext)
  const {showModal,setShowModal,resetCart} = useContext(CartContext)

  return(
    <>
    {showModal && <StyledModal>
        <StyledModalHeader>
          <h2>Carrinho de compras</h2>
          <button onClick={()=> setShowModal(false)}>X</button>
        </StyledModalHeader>

        {cardList.length === 0 ? 
        <StyledModalContentEmpty>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </StyledModalContentEmpty>:
        <StyledModalContentItems>
          <ul>
            {cardList?.map(cardElement => <CartProduct key={cardElement.id}category={cardElement.category}id={cardElement.id}img={cardElement.img}name={cardElement.name}price={cardElement.price}quantity={cardElement.quantity}/>)}
            
          </ul>
          <div>
            <h3>Total</h3>
            <span>R$ 0.00</span>
          </div>

          <StyledButton onClick={() => resetCart()} buttonColor="green" buttonSize="large">Remover Todos</StyledButton>
        </StyledModalContentItems>}

    </StyledModal>}
    
    </>
  )
}