"use client";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";

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
      <main className={styles.main}>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between border-t border-gray-200 p-4"
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-md bg-gray-100 py-2 pr-4 pl-2 text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="ml-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}
