"use client";
import React from "react";
import { useInput } from "../../../hooks/useInput";
// import styles from "./login.module.css";
import AuthForm from "../../../components/AuthForm";

const Login = () => {
  const [email, handleEmail, resetEmail] = useInput("");
  const [password, handlePassword, resetPassword] = useInput("");
  return (
    <>
      <AuthForm submit={"Login"} label={"Login"} />
    </>
  );
};

export default Login;
