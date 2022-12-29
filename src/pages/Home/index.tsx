import { Header } from "../../components/Header";
import { ProductList } from "../../components/Products/ProductList";
import { CartProvider } from "../../contexts/CartContext";
import { Modal } from "../../components/Cart";

export function Home(){

  return(
    <CartProvider>
    <Modal/>
    <Header/>
    <ProductList/>
    </CartProvider>
  )
}