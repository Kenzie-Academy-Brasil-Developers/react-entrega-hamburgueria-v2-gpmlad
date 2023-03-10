import { ToastContainer } from "react-toastify";
import { Container } from "../../components/Container/style";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { LogoCard } from "../../components/LogoCard";

export function Register(){
  return(
    <>
    <ToastContainer/>
    <Container>
    <LogoCard/>
    <RegisterForm/>
    </Container>
    </>
  )
}