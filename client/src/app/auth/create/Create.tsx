"use client";
import React from "react";
import { useInput } from "../../../hooks/useInput";
import { useForm } from "../../../hooks/useForm";
import { POST } from "../../../helpers/constants";
import { useRouter } from "next/navigation";
import createValidateForm from "../../../validations/auth/create";
import useValidation from "../../../hooks/useValidation";
import ErrorMessages from "../../../components/auth/ErrorMessages";
import Link from "next/link";

const Create = () => {
  const [username, , handleUsername, resetUsername] = useInput("");
  const [email, , handleEmail, resetEmail] = useInput("");
  const [password, , handlePassword, resetPassword] = useInput("");
  const [errors, setError, resetValidation] = useValidation([]);
  const { push } = useRouter();

  const sendCreateRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check validation
    const checkErrors = createValidateForm({
      username: username,
      email: email,
      password: password,
    });
    // If there is an error, stop submit
    if (checkErrors.length > 0) {
      setError([...checkErrors]);
      return;
    }

    try {
      const apiResponse = await useForm({
        values: {
          username: username,
          email: email,
          password: password,
          created: new Date(),
        },
        url: "/user/create",
        httpMethod: POST,
      });
      if (apiResponse.status === 200) {
        resetUsername();
        resetEmail();
        resetPassword();
        resetValidation();
        push("/");
      } else {
        setError([apiResponse.data.message]);
      }
    } catch (error) {
      console.error(`Failed to reset your password: ${error}`);
      throw new Error(`Failed to reset your password: ${error}`);
    }
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-12 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Register</h2>
          <form onSubmit={sendCreateRequest}>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="bg-white focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="username"
              >
                Email Address
              </label>
              <input
                className="bg-white focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="username"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-white focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="password"
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
              />
            </div>
            <button
              className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Register
            </button>
            <div className="mt-4">
              <ErrorMessages errors={errors} />
            </div>
          </form>
          <div className="mt-4 w-full">
            <Link
              className="flex justify-center text-blue-600 visited:text-blue-600 hover:text-purple-800"
              href="/auth/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
