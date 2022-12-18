import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserRegister } from "../../../contexts/UserContext";
import { Input } from "../Input";
import { registerSchema } from "./registerSchema";

export function RegisterForm(){

  const {register,handleSubmit, formState:{errors}} = useForm<iUserRegister>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  })

  const submit:SubmitHandler<iUserRegister> = (data) => {console.log(data)}

  return(
    <form onSubmit={handleSubmit(submit)}>
      <Input disabled={false} id="name" legend="Nome" placeholder="Nome"  register={register('name')}  type='text'/>
      {errors.name?.message}

      <Input disabled={false} id="email" legend="Email" placeholder="Email"  register={register('email')}  type='email'/>
      {errors.email?.message}

      <Input disabled={false} id="password" legend="Senha" placeholder="Senha"  register={register('password')}  type='password'/>
      {errors.password?.message}

      <Input disabled={false} id="confirmPassword" legend="Confirmar senha" placeholder="Confirmar senha"  register={register('confirmPassword')}  type='password'/>
      {errors.confirmPassword?.message}

      <button type="submit">Cadastrar</button>
    </form>
  )
}