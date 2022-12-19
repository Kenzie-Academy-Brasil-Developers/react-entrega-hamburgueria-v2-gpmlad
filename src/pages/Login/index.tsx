import { ToastContainer } from "react-toastify";
import { Container } from "../../components/Container/style";
import { LoginForm } from "../../components/Form/LoginForm";
import { LogoCard } from "../../components/LogoCard";

export function Login(){
  return(
    <>
      <Container>
      <ToastContainer/>
      <LogoCard/>
      <LoginForm/>
      </Container>
    </>
  )
}