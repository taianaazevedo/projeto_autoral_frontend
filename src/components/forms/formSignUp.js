import { useForm } from "react-hook-form";
import { StyledForm } from "./formStyle";

export default function FormSignUp() {
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
        type="text"
        placeholder="Nome"
        {...register("Nome", { required: true })}
        aria-invalid={errors.Nome ? "true" : "false"}
      />
      {errors.Nome?.type === 'required' && <p className="alert">Name is required</p>}
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        aria-invalid={errors.Email ? "true" : "false"}
      />
      {errors.Email?.type === 'required' && <p className="alert">Email is required</p>}
      <input
        type="text"
        name="Url"
        placeholder="Url da sua foto"
        {...register("Url", { required: true })}
        aria-invalid={errors.Url ? "true" : "false"}
      />
      {errors.Url?.type === 'required' && <p className="alert">Url is required</p>}
      <input
        type="password"
        placeholder="Senha"
        {...register("Senha", { required: "Password is required"})}
        aria-invalid={errors.Senha ? "true" : "false"}
      />
      {errors.Senha && <p className="alert">{errors.Senha?.message}</p>}
      <input
        type="password"
        name="ConfirmPassword"
        placeholder="Confirme a senha"
        {...register("ConfirmPassword", { required: "Confirm password is required"})}
        aria-invalid={errors.ConfirmPassword ? "true" : "false"}
      />
      {errors.ConfirmPassword && <p className="alert">{errors.ConfirmPassword?.message}</p>}
      <button type="submit" placeholder="Entrar">Cadastrar</button>
    </StyledForm>
  );
}
