import React from "react";
// import styles from "./login.module.css";
import { useInput } from "../../../hooks/useInput";
import { useForm } from "../../../hooks/useForm";
import { useValidation } from "../../../hooks/useValidation";
import { LoginInterface } from "../../../interfaces/auth";
import { POST } from "../../../helpers/constants";
import loginValidateForm from "../../../validations/auth/login";
import Link from "next/link";

const Login = () => {
  const [email, , handleEmail, resetEmail] = useInput("");
  const [password, , handlePassword, resetPassword] = useInput("");
  const [error, setError] = useValidation([]);
  const sendRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInfo: LoginInterface = { email: email, password: password };
    // Check validation
    const errors = loginValidateForm(userInfo);
    // If there is an error, stop submit
    if (errors.length > 0) {
      setError((prevArray) => [...prevArray, ...errors]);
      return;
    }
    const apiResponse = await useForm({
      values: userInfo,
      url: "/user/login",
      httpMethod: POST,
    });
    resetEmail();
    resetPassword();
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-12 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Login</h2>
          <form onSubmit={sendRequest}>
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="username"
            >
              Email Address
            </label>
            <input
              className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              id="username"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={handleEmail}
            />
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              id="password"
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />
            <button
              className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Login
            </button>
            <p>{error}</p>
          </form>
          <div className="mt-4 w-full">
            <Link
              className="flex justify-center text-blue-600 visited:text-blue-600 hover:text-purple-800"
              href="/auth/reset-password"
            >
              Reset Password
            </Link>
          </div>
          <div className="mt-4 w-full">
            <Link
              className="flex justify-center text-blue-600 visited:text-blue-600 hover:text-purple-800"
              href="/auth/create"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
