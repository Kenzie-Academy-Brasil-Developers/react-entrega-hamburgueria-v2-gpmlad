import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../Input"
import { loginSchema } from "./loginSchema"
import { iUserLogin } from "../../../contexts/UserContext"


export function LoginForm(){

  const {register, handleSubmit, formState:{errors}} = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur"
  }  
  )

  const submit:SubmitHandler<iUserLogin> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input disabled={false} id="name" legend="Nome" placeholder="Nome"  register={register('name')}  type='text'/>
      {errors.name?.message}

      <Input disabled={false} id="password" legend="Senha" placeholder="Senha"  register={register('password')}  type='password'/>
      {errors.password?.message}

      <button type="submit">Enviar</button>
    </form>
  )
}