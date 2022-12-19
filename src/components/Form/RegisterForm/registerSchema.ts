import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório').min(3,'Mínimo de 3 caracteres').max(30, 'Máximo de 30 caracteres'),

  email: yup.string().required('Endereço de e-mail é obrigatório').email('É necessário fornecer um e-mail válido'),

  password: yup.string().required('Senha obrigatória').min(6,'É necessário uma senha de pelo menos seis caracteres'),

  confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password')],'A senha informada não coincide'),

})