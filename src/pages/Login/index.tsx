import { ToastContainer } from "react-toastify";
import { Container } from "../../components/Container/style";
import { LoginForm } from "../../components/Form/LoginForm";
import { LogoCard } from "../../components/LogoCard";

export function Login(){
  return(
    <>
      <ToastContainer/>
      <Container>
      <LogoCard/>
      <LoginForm/>
      </Container>
    </>
  )
}