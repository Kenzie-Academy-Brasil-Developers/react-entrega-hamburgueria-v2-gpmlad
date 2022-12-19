import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";

interface iInputProps{
  legend: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  disabled: boolean;
}

export function Input({legend,id,type,register,placeholder,disabled}:iInputProps){
  return(
    <StyledInput>
      <legend>{legend}</legend>
      <input id={id} type={type} placeholder={placeholder} disabled={disabled} {...register}/>
    </StyledInput>
  )
}