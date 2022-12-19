import { StyledProductList } from "./style"
import { useContext } from "react"
import { ProductCard } from "../ProductCard"
import { CartContext } from "../../../contexts/CartContext"

export function ProductList() {
  const {searchText, filteredProducts} = useContext(CartContext)
  return (
    <StyledProductList className="container">
      {
        searchText &&
        <p className="heading1">Resultados para: <span>{searchText}</span> </p>
      }
      <ul>
        {filteredProducts?.map( product => <ProductCard key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img}/>)}
      </ul>
    </StyledProductList>
  )
}