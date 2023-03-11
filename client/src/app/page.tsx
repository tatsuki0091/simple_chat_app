// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="mb-4">
          <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Button
          </button>
          <label
            className="text-grey-darker mb-2 block text-sm font-bold"
            htmlFor="username"
          >
            Username
          </label>
        </div>
        <div className="mb-6">
          <label
            className="text-grey-darker mb-2 block text-sm font-bold"
            htmlFor="password"
          >
            Password
          </label>

          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark rounded py-2 px-4 font-bold text-white"
            type="button"
          >
            Sign In
          </button>
          <a
            className="text-blue hover:text-blue-darker inline-block align-baseline text-sm font-bold"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </main>
  );
}
