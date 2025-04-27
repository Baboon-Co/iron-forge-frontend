import {SubmitButton} from "@/app/components/buttons/SubmitButton/SubmitButton";
import Link from "next/link";


export const WelcomePage = () => {


  return (
    <div className={"px-3 py-7 rounded-xs bg-back flex flex-row gap-5 w-[400px] top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
      <Link className={"w-full"} href={"/login"}>
        <SubmitButton className={"w-full"} onClick={()=>{}} >Log in</SubmitButton>
      </Link>

      <Link className={"w-full"} href={"/registration"}>

        <SubmitButton className={"w-full"} onClick={()=>{}}>Sign up</SubmitButton>

      </Link>
    </div>
  );

}
