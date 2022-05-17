import axios from "axios";
import Image from "next/image";
import React, { useState, useRef } from "react";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // emailRef.current.value = "";
    // passwordRef.current.value = '';
    setEmailInput(email);
    setPasswordInput(password);
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setemailError(true);
    }
    if (password.length === 0) {
      setpasswordError(true);
    } else {
      setpasswordError(false);
    }
    // email = "";
    // password = "";

    const res = await axios.post("http://localhost:8000/api/register/", {
      username: emailInput,
      email: passwordInput,
    });
    console.log(res);
  };

  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-no-repeat bg-cover shadow-2xl shadow-black-100 rounded-md">
      <Image
        className=" rounded-md"
        src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        width={350}
        height={360}
      />
      <div className="  w-96  p-9 shadow-2xl shadow-black-100 rounded-md">
        <h1 className="font-bold text-2xl mb-10 text-center">
          Sadhna Admin Login
        </h1>
        <p>Email</p>
        <input
          className={`${
            emailError ? "border-x-8 border-red-900" : ""
          }px-3 py-2     focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1`}
          type="text"
          ref={emailRef}
        />
        <p className={!emailError && "invisible"}>Please enter valid email</p>
        <p className="mt-5">Password</p>
        <input
          type="text"
          className={`${
            emailError ? "text-red-400" : ""
          }px-3 py-2 bg-white border shadow-sm border-black   focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1`}
          ref={passwordRef}
        />
        <p className={!passwordError && "invisible"}>
          Please enter valid password
        </p>
        <div className="">
          <button
            className="rounded-6xl bg-btn-menu-bg border-2 w-32 h-12 font-bold text-lg mt-5  float-right"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
