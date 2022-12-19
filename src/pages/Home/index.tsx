import { useContext} from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/Products/ProductList";
import { CartProvider } from "../../contexts/CartContext";

export function Home(){
  

  return(
    <CartProvider>
    <Header/>
    <ProductList/>
    </CartProvider>
  )
}