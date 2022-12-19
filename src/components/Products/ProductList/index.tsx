import { StyledProductList } from "./style"
import { useContext } from "react"
import { ProductCard } from "../ProductCard"
import { UserContext } from "../../../contexts/UserContext"

export function ProductList() {
  
  const { products } = useContext(UserContext)

  return (
    <StyledProductList className="container">
      {
        /*
        searchText &&
        <p className="heading1">Resultados para: <span>{searchText}</span> </p>
        */
      }
      <ul>
        {products?.map( product => <ProductCard key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img}/>)}
      </ul>
    </StyledProductList>
  )
}