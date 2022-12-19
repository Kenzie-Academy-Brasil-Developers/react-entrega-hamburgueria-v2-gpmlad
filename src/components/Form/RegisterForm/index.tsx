import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { iUserRegister, UserContext } from "../../../contexts/UserContext";
import { StyledButton } from "../../Button/style";
import { Input } from "../Input";
import { StyledForm } from "../LoginForm/style";
import { registerSchema } from "./registerSchema";

export function RegisterForm(){

  const {userRegister,loading} = useContext(UserContext)

  const {register,handleSubmit, formState:{errors}} = useForm<iUserRegister>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  })

  const submit:SubmitHandler<iUserRegister> = (data) => {
    delete data.confirmPassword
    userRegister(data)
  }

  return(
    <StyledForm>
    <div>
      <h2>Cadastro</h2>
      <Link to='/'>Retornar para o login</Link>
    </div>
    <form onSubmit={handleSubmit(submit)}>
      <Input disabled={loading} id="name" legend="Nome" placeholder="Nome"  register={register('name')}  type='text'/>
      {errors.name && <span>{errors.name.message}</span>}

      <Input disabled={loading} id="email" legend="Email" placeholder="Email"  register={register('email')}  type='email'/>
      {errors.email && <span>{errors.email.message}</span>}


      <Input disabled={loading} id="password" legend="Senha" placeholder="Senha"  register={register('password')}  type='password'/>
      {errors.password && <span>{errors.password.message}</span>}

      <Input disabled={loading} id="confirmPassword" legend="Confirmar senha" placeholder="Confirmar senha"  register={register('confirmPassword')}  type='password'/>
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      <StyledButton disabled={loading} type="submit" buttonColor={loading?'gray':"green"} buttonSize="large">{loading?'Cadastrando...':'Cadastrar'}</StyledButton>
    </form>
    </StyledForm>
  )
}