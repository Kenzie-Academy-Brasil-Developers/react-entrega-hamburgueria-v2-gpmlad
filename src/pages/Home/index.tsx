import { Header } from "../../components/Header";
import { ProductList } from "../../components/Products/ProductList";
import { CartProvider } from "../../contexts/CartContext";
import { Modal } from "../../components/Cart";
import { ToastContainer } from "react-toastify";

export function Home(){

  return(
    <CartProvider>
    <ToastContainer/>
    <Modal/>
    <Header/>
    <ProductList/>
    </CartProvider>
  )
}