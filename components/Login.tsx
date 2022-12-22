import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser } = useAuth();
  console.log("currentUser:", currentUser);

  async function sumbitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return
    }
    await signup(email, password);
  }

  return (
    <div
      className="flex-1 bg-turquoise-green rounded-md text-xs 
      sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4 select-none"
    >
      <h1 className="font-extrabold text-2xl sm:text-4xl uppercase">
        {" "}
        {isLoggingIn ? "Login" : "Register"}{" "}
      </h1>
      {error && (
        <div className="border boder-solid rounded-md w-full max-w-[40ch] border-rose-400 text-rose-400 py-2">
          {error}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="outline-none text-slate-900 w-full max-w-[40ch] 
      rounded-md p-2 duration-300 border-b-2
      border-solid border-white focus:border-alizarin-red"
        placeholder="Email address"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        className="outline-none text-slate-900 w-full max-w-[40ch] 
      rounded-md p-2 duration-300 border-b-2
      border-solid border-white focus:border-alizarin-red"
        placeholder="Password"
      />
      <button
        onClick={sumbitHandler}
        className="text-white rounded-md w-full max-w-[40ch] border border-white border-solid uppercase py-2
      duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10
      after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}
