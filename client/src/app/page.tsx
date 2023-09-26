"use client";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import Chat from './chat/page'
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [message, setMessage] = useState("");


  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Do something with the message
    setMessage("");
  };
  return (
    <>
      <main>
        <Chat />
      </main>
    </>
  );
}
