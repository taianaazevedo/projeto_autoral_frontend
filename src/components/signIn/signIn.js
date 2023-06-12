import FormSignIn from "../forms/formSignIn";
import Logo from "../logo/logo";
import { StyledSignIn } from "./signInStyle";

export default function SignInPage() {
  return (
    <StyledSignIn>
      <Logo />
      <FormSignIn />
      <p className="link-sign-up">
        Ainda não tem uma conta?
        <br />
        Cadastre-se
      </p>
    </StyledSignIn>
  );
}
