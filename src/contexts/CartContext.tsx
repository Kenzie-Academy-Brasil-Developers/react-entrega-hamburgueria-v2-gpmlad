import { createContext, useState } from "react";
import { iProviderProps } from "./UserContext";

interface iCartProviderProps{
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iCartProviderProps)

export function CartProvider({children}:iProviderProps){

  const [search, setSearch] = useState(false)

  return(
    <CartContext.Provider value={{search,setSearch}}>
      {children}
    </CartContext.Provider>
  )
}