"use client";
import React from "react";
import { useInput } from "../../../hooks/useInput";
import { useForm } from "../../../hooks/useForm";
import { PATCH } from "../../../helpers/constants";
import { useRouter } from "next/navigation";
import ErrorMessages from "../../../components/auth/ErrorMessages";
import useValidation from "../../../hooks/useValidation";
import resetPasswordValidateForm from "../../../validations/auth/resetPassword";
import Link from "next/link";

const ResetPassword = () => {
  const [email, , handleEmail, resetEmail] = useInput("");
  const [errors, setError, resetError] = useValidation([]);
  const { push } = useRouter();
  const resetPasswordRequest = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // Check validation
    const checkErrors = resetPasswordValidateForm({ email: email });
    // If there is an error, stop submit
    if (checkErrors.length > 0) {
      setError([...checkErrors]);
      return;
    }
    try {
      const apiResponse = await useForm({
        values: {
          email: email,
          updated: new Date(),
        },
        url: "/user/reset-password",
        httpMethod: PATCH,
      });
      if (apiResponse.status === 200) {
        if (apiResponse.data.pass) {
          resetEmail();
          resetError();
          push("/auth/login");
        } else {
          setError([
            "Currently not available to reset password. Please try later",
          ]);
        }
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
          <h2 className="mb-4 text-2xl font-bold">Reset Passwprd</h2>
          <form onSubmit={resetPasswordRequest}>
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="username"
            >
              Email Address
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              id="username"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={handleEmail}
            />
            <button
              className="focus:shadow-outline mt-4 w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Reset Password
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

export default ResetPassword;
