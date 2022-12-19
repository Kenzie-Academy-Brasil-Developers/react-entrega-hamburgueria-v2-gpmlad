/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface iProviderProps{
  children: React.ReactNode
}

export interface iUserLogin{
  email:string;
  password: string;
}

export interface iUserRegister{
  name: string;
  email:string;
  password: string;
  confirmPassword?: string
}

export interface iProducts{
  id:number;
  name: string;
  category: string;
  price: number
  img: string;
}

interface iRegisterResponse{
  accessToken: string;
  user:{
    id: string;
    name: string;
    email: string;
  }
}

export interface iRequestError {
  error: string;
}

interface iUserProviderData{
  userLogin: (formData:iUserLogin) => void;
  userRegister: (formData:iUserRegister) => void;
  userLogout: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  products: iProducts[];
}

export const UserContext = createContext({} as iUserProviderData)

export function UserProvider({children}:iProviderProps){
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([] as iProducts[]);

  const navigate = useNavigate();

  async function userLogin(formData:iUserLogin) {
    try {
      setLoading(true)
      const response = await api.post('/login',formData)

      localStorage.setItem('@TOKEN', JSON.stringify(response.data.accessToken))
      localStorage.setItem('@USERID', JSON.stringify(response.data.user.id))

      toast.success('Login realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
      setTimeout(() => {
        navigate('/home')
        
      }, 6000);

    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } finally{
      setLoading(false)
    }
  }

  async function userRegister(formData:iUserRegister) {
    try {
      setLoading(true)

      await api.post<iRegisterResponse>('/users',formData)

      toast.success('Cadastro realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setTimeout(() => {
        navigate('/')
      }, 6000);
    } catch (error) {
        toast.error('Verifique que o email já foi cadastrado', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

    } finally{
      setLoading(false)
    }
  }

  function userLogout() {
    localStorage.clear()
    navigate('/')
  }

  useEffect(()=>{
    async function userLoad() {
      const token = localStorage.getItem('@TOKEN')
 
      if(!token) {
        setLoading(false)
        navigate('/')
        return
        }
  
      try {
        const response = await api.get<iProducts[]>('/products', {headers:{
          Authorization: `Bearer ${JSON.parse(token)}`
        }})
        console.log(response.data)
        setProducts(response.data)
        navigate('/home')
        } catch (error) {
          console.log(error)
        }finally {
          setLoading(false)
          }
      }
    userLoad()

    
  },[])


  return(
  <UserContext.Provider value={{products,userLogin,userRegister,userLogout, setLoading, loading}}>
    {children}
  </UserContext.Provider>
  )
}