"use client";
import React from "react";
import { useInput } from "../../../hooks/useInput";
import styles from "./login.module.css";

const Login = () => {
  const [username, handleUsername, resetUsername] = useInput("");
  const [password, handlePassword, resetPassword] = useInput("");
  console.log("rendering InputWithLabel");
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-12 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
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
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="password"
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
              />
            </div>
            <button
              className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
