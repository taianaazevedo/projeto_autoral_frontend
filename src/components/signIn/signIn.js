import logo from "../../assets/notebook.png";
import FormSignIn from "../forms/formSignIn";
import { Logo, StyledSignIn } from "./signInStyle";

export default function SignInPage() {
  return (
    <StyledSignIn>
      <Logo>
        <img src={logo} alt="logo" className="scale-in-center"/>
        <p className="p1">Citação</p>
        <p className="p2">em Foco</p>
      </Logo>
      <FormSignIn />
      <p className="link-sign-up">
        Ainda não tem uma conta?
        <br />
        Cadastre-se
      </p>
    </StyledSignIn>
  );
}
