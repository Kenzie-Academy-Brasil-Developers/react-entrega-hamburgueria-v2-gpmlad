import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { iProducts, iProviderProps, UserContext } from "./UserContext";

interface iCartProviderProps{
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  filteredProducts: iProducts[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  showProducts: (text:string) => void;
}

export const CartContext = createContext({} as iCartProviderProps)

export function CartProvider({children}:iProviderProps){
  const { products} = useContext(UserContext)
  const [search, setSearch] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchText, setSearchText] = useState('')

  function showProducts(text:string) {
    const result = (products.filter(product => {
      return((product.name.toLowerCase()).indexOf(text.toLowerCase()) !== -1 || (product.category.toLowerCase()).indexOf(text.toLowerCase()) !== -1 )? true : false}
    ))
    setFilteredProducts(result)
  }

  useEffect(()=>{
    async function userLoad() {
      const token = localStorage.getItem('@TOKEN')
 
      if(!token) {
        return
        }
  
      try {
        const response = await api.get<iProducts[]>('/products', {headers:{
          Authorization: `Bearer ${JSON.parse(token)}`
        }})
        setFilteredProducts(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    userLoad()

    
  },[])

  return(
    <CartContext.Provider value={{search,setSearch, filteredProducts, searchText, showProducts, setSearchText}}>
      {children}
    </CartContext.Provider>
  )
}