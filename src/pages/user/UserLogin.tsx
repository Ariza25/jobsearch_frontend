import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthContext } from "../../context/user/AuthUserContext";

import Loading from "../../components/Loading";

interface FormData {
  email: string;
  password: string;
}

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    setIsLoading(true);

    try {
      loginUser(data.email, data.password);
      navigate("/dashboard/perfil");
    } catch (error) {
      console.error("Error on register:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="w-[100%] min-h-screen bg-slate-50 flex items-center justify-center">
        <main className=" border-gray-600">
          <h1 className="font-medium text-center text-gray-600 text-4xl">
            Acesse sua conta:
          </h1>

          <form
           className="flex flex-col my-6 pb-6 w-[800px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="font-medium text-gray-600 pb-1 mt-4">
              E-mail:
            </label>
            <input
              className={`w-full p-2.5 rounded-lg border ${
                errors?.email ? "border-red-500" : ""
              }`}
              type="email"
              autoComplete="username"
              placeholder="Digite seu email"
              {...register("email", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-600 pt-1">O e-mail é necessário</p>
            )}
            {errors?.email?.type === "validate" && (
              <p className="text-red-600 pt-1">O e-mail é inválido</p>
            )}

            <label className="font-medium text-gray-600 pt-4 pb-1">
              Senha:
            </label>
            <input
              className={`w-full p-2.5 rounded-lg border ${
                errors?.password ? "border-red-500" : ""
              }`}
              type="password"
              autoComplete="new-password"
              placeholder="Digite sua senha"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-red-600 pt-1">A senha é necessária</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="text-red-600 pt-1">
                A senha deve possuir no mínimo 6 caracteres
              </p>
            )}
            {errors?.password?.type === "maxLength" && (
              <p className="text-red-600 pt-1">
                A senha deve possuir no máximo 12 caracteres
              </p>
            )}

            <button
              type="submit"
              className="mt-6 cursor-pointer rounded w-full p-2 bg-gray-800 hover:bg-gray-600 font-semibold text-white"
            >
              {isLoading ? <Loading /> : "Entrar"}
            </button>
          </form>

          <span className="text-slate-600 flex justify-center mb-4 mt-[-20px]">
            Ainda não possui uma conta?
            <Link
              className="underline hover:text-slate-400 ms-1 font-bold"
              to="/userregister"
            >
              Cadastre-se
            </Link>
          </span>
        </main>
      </div>
      <hr />
    </>
  );
};

export default UserLogin;
