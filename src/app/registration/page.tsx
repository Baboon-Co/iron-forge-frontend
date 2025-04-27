"use client"
import {TextInput} from "@/app/components/TextInput/TextInput";
import {useEffect, useState} from "react";
import {SubmitButton} from "@/app/components/buttons/SubmitButton/SubmitButton";


const RegistrationPage = () => {
  const VALIDATE_USERNAME_REGEX=/^[a-zA-Z0-9]{3,20}$/;
  const VALIDATE_PASSWORD_REGEX=/^[a-zA-Z0-9]{3,20}$/;



  const [userName, setUserName] = useState("")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const [userNameError, setUserNameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")


  useEffect(()=>{resetErrors()},[userName,password,confirmPassword])


  const validateUserName = (userName:string) => {
    return VALIDATE_USERNAME_REGEX.test(userName)
  }
  const validatePassword = (password:string) => {
    return VALIDATE_PASSWORD_REGEX.test(password)
  }

  const resetErrors = () => {
    setUserNameError("")
    setPasswordError("")
    setConfirmPasswordError("")
  }


  const submitHandler = () => {
    if(!validateUserName(userName)) {
      setUserNameError("Username is invalid")
    }
    if(!validatePassword(password)) {
      setPasswordError("Invalid password")
    }
    if(password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
    }
  }


  return <div className={"px-6 py-8 rounded-xs bg-back flex flex-col gap-5 w-[400px] top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 "}>
        <h2 className={"text-h2"}>Registration</h2>
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <TextInput error={userNameError}  value={userName} setValue={setUserName} placeholder={"Username"} />
            <TextInput isHidden={true} error={passwordError} value={password} setValue={setPassword} placeholder={"Password"} />
            <TextInput isHidden={true} error={confirmPasswordError} value={confirmPassword} setValue={setConfirmPassword} placeholder={"Confirm password"} />
          </div>
            <SubmitButton isDisabled={userNameError || passwordError || confirmPasswordError} onClick={submitHandler}> Finish</SubmitButton>



        </div>
  </div>

}
export default RegistrationPage