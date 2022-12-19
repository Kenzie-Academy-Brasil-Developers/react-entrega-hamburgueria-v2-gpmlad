import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../Input"
import { loginSchema } from "./loginSchema"
import { iUserLogin, UserContext } from "../../../contexts/UserContext"
import { StyledButton } from "../../Button/style"
import { StyledForm } from "./style"
import { Link } from "react-router-dom"
import { useContext } from "react"


export function LoginForm(){

  const {userLogin,loading} = useContext(UserContext)

  const {register, handleSubmit, formState:{errors}} = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur"
  }  
  )

  const submit:SubmitHandler<iUserLogin> = (data) => {
      userLogin(data)
  }

  return (
    <StyledForm>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <Input disabled={loading} id="email" legend="Email" placeholder="Email"  register={register('email')}  type='text'/>
        {errors.email && <span>{errors.email.message}</span>}

        <Input disabled={loading} id="password" legend="Senha" placeholder="Senha"  register={register('password')}  type='password'/>
        {errors.password && <span>{errors.password.message}</span>}

        <StyledButton type="submit" buttonColor={loading?'gray':"green"} buttonSize="large">{loading?'Autorizando...':'Enviar'}</StyledButton>
      </form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <Link to='/register'>
      <StyledButton disabled={loading} buttonColor="gray" buttonSize="large">Cadastrar</StyledButton>
      </Link>
    </StyledForm>
  )
}