"use client";
import React from "react";
import { useInput } from "../../../hooks/useInput";
import { ResetPasswordInterface } from "../../../interfaces/auth";
import { useForm } from "../../../hooks/useForm";
import { PATCH } from "../../../helpers/constants";

const ResetPassword = () => {
  const [email, handleEmail, resetEmail] = useInput("");
  const resetPasswordRequest = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const userInfo: ResetPasswordInterface = {
      email: email,
      updated: new Date(),
    };
    const url = "/user/reset-password";
    try {
      const apiResponse = await useForm({
        values: userInfo,
        url: url,
        httpMethod: PATCH,
      });
      resetEmail();
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
            <div className="mb-4">
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
            </div>
            <button
              className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
