import { useForm } from "react-hook-form";
import { StyledForm } from "./formStyle";

export default function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function onSubmit(data) {
    console.log(data);
  } 
 

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        aria-invalid={errors.Email ? "true" : "false"}
      />
      {errors.Email?.type === 'required' && <p className="alert">First name is required</p>}
      <input
        type="password"
        placeholder="Senha"
        {...register("Senha", { required: "Password is required"})}
        aria-invalid={errors.Senha ? "true" : "false"}
      />
      {errors.Senha && <p className="alert">{errors.Senha?.message}</p>}
      <button type="submit" placeholder="Entrar">Entrar</button>
    </StyledForm>
  );
}
