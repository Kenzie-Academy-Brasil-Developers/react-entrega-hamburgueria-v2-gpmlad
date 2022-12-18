import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório').min(3,'Mínimo de 3 caracteres').max(30, 'Máximo de 30 caracteres'),

  email: yup.string().required('Endereço de e-mail é obrigatório').email('É necessário fornecer um e-mail válido'),

  password: yup.string().required('Senha obrigatória').matches(/(?=.*?[A-Z])/, 'Necessário uma letra maiúscula').matches(/(?=.*?[a-z])/, 'Necessário uma letra minúscula').matches(/(?=.*?[0-9])/,'Necessário um número').matches(/(?=.*?[#?!@$%^&*-])/,'Necessário um caractere especial').min(8,'É necessário uma senha de pelo menos oito caracteres'),

  confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password')],'A senha informada não coincide'),

})