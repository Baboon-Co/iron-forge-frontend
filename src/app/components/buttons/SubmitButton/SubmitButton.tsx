"use client";


import React from "react";
import {SubmitButtonProps} from "@/app/components/buttons/SubmitButton/SubmitButton.props";

export const SubmitButton:React.FC<SubmitButtonProps> = ({className,children,onClick,isDisabled}) => {

  return(

    <button disabled={isDisabled} onClick={onClick} className={`bg-brand text-white rounded-md py-2 px-4 text-md hover:bg-accent  duration-750 active:scale-95 active:duration-100 active:bg-[#1a72cb] disabled:bg-gray-500 disabled:cursor-not-allowed ${className} `}>{children}</button>


  )


};