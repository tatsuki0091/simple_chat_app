"use client";
import React from "react";
// import styles from "./login.module.css";
import AuthForm from "../../../components/AuthForm";

const Login = () => {
  return (
    <>
      <AuthForm submit={"Login"} label={"Login"} />
    </>
  );
};

export default Login;
