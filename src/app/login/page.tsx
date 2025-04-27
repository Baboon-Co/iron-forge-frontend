"use client";

import {TextInput} from "@/app/components/TextInput/TextInput";
import React, {useState} from "react";
import {SubmitButton} from "@/app/components/buttons/SubmitButton/SubmitButton";
import Link from "next/link";

export const LoginPage:React.FC<> = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = () => {}


  return <div className={"px-6 py-8 rounded-xs bg-back flex  flex-col gap-5 w-fit top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
    <div className="">
      <h2 className="text-h2">Log in</h2>
    </div>
    <div className=" flex flex-row">
      <div className="flex flex-col gap-2 pr-4">
        <TextInput placeholder={"Username"} value={userName} setValue={setUserName} />
        <TextInput placeholder={"Password"} value={password} setValue={setPassword} />
      </div>
      <div className="flex flex-col justify-between pl-4 border-l-1 border-gray-400 w-[200px]">
        <Link href={"/registration"}><p>Dont have an account? <span className={"underline hover:cursor-pointer hover:text-accent"}>Sign up here</span></p></Link>
        <SubmitButton onClick={handleSubmit} >Log in</SubmitButton>
      </div>
    </div>
  </div>;}

export default LoginPage;