/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iProducts, iProviderProps, UserContext } from "./UserContext";

interface iCartProviderProps{
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  filteredProducts: iProducts[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  showProducts: (text:string) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  getItemById: (productID: number)=> void;
  cardList: iCartProducts[];
  setCardList: React.Dispatch<React.SetStateAction<iCartProducts[]>>;
  resetCart: () => void;
  filterCartItemById:(itemId: number)=> void
}

export interface iCartProducts {
  id:number;
  name: string;
  category: string;
  price: number
  img: string;
  quantity: number;
}

export const CartContext = createContext({} as iCartProviderProps)

export function CartProvider({children}:iProviderProps){
  const { products} = useContext(UserContext)
  const [search, setSearch] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchText, setSearchText] = useState('')
  const [showModal,setShowModal] = useState(false)
  const [ cardList,setCardList] = useState([] as iCartProducts[])

  const navigate = useNavigate();

  function showProducts(text:string) {
    const result = (products.filter(product => {
      return((product.name.toLowerCase()).indexOf(text.toLowerCase()) !== -1 || (product.category.toLowerCase()).indexOf(text.toLowerCase()) !== -1 )? true : false}
    ))
    setFilteredProducts(result)
  }

  async function getItemById(productID:number){
    const token = localStorage.getItem('@TOKEN')

    if(!token) {
      return
      }

    try {
      const result = await api.get<iProducts>(`/products/${productID}`, {headers:{
        Authorization: `Bearer ${JSON.parse(token)}`
      }})
      let obj:iCartProducts = {...result.data, quantity:1}
      setCardList([...cardList, obj])
      //adicionar toasty de produto adicionado ao carrinho
    } catch (error) {
      console.log(error)
    }
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
        console.log('use effect')
        setFilteredProducts(response.data)
        } catch (error) {
          navigate('/')
          toast.error('Login expirado, entre novamente!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          console.log(error)
        }
      }
    userLoad()

    
  },[])

  function resetCart(){
    setCardList([])
  }

  function filterCartItemById(itemId:number){
    const filtered = cardList.filter(element => element.id !== itemId)
    setCardList(filtered)
  }

  return(
    <CartContext.Provider value={{search,setSearch, filteredProducts, searchText, showProducts, setSearchText,showModal,setShowModal,getItemById,cardList,setCardList,resetCart,filterCartItemById}}>
      {children}
    </CartContext.Provider>
  )
}