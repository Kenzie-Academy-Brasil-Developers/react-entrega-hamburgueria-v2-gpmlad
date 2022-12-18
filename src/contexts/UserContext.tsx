import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface iProviderProps{
  children: React.ReactNode
}

export interface iUserLogin{
  name:string;
  password: string;
}

export interface iUserRegister{
  name: string;
  email:string;
  password: string;
  confirmPassword: string
}

interface iProducts{
  id:number;
  name: string;
  category: string;
  price: number
  img: string;
}

interface iUserProviderData{
  userLogin: (formData:iUserLogin) => void;
  userRegister: (formData:iUserRegister) => void;
}

export const UserContext = createContext({} as iUserProviderData)

export function UserProvider({children}:iProviderProps){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([] as iProducts[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iProducts[]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState([])
  const [searchText, setSearchText] = useState('')

  async function userLogin(formData:iUserLogin) {
    try {
      setLoading(true)
      const response = await api.post('/login',formData)
      setUser(response.data.user)
      localStorage.setItem('@TOKEN', JSON.stringify(response.data.token))
      localStorage.setItem('@USERID', JSON.stringify(response.data.user.id))
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  async function userRegister(formData:iUserRegister) {
    try {
      setLoading(true)
      const response = await api.post('/users',formData)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    async function userLoad() {
      const token = localStorage.getItem('@TOKEN')

  
      if(!token) {
        setLoading(false)
        return
        }
  
      try {
        const {data} = await api.get<iProducts[]>('/products', {headers:{
          Authorization: `Bearer ${JSON.parse(token)}`
        }})
              
        setProducts(data)
        } catch (error) {
          console.error(error)
        }finally {
          setLoading(false)
          }
      }
    userLoad()

    
  },[])
  

  return(
  <UserContext.Provider value={{userLogin,userRegister}}>
    {children}
  </UserContext.Provider>
  )
}