import FormSignUp from "../forms/formSignUp";
import Logo from "../logo/logo";
import { StyledSignUp } from "./signUpStyle";

export default function SignUpPage() {
  return (
    <StyledSignUp>
      <Logo />
      <FormSignUp />
      <p className="link-login">
        Já possui uma conta?
        <br />
        Faça login
      </p>
    </StyledSignUp>
  );
}