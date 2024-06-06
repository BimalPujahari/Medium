import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import { SignupType } from "@bimal456/medium-common";
import axios from "axios"
import { BACKEND_URL } from "../config";
export const Auth=({type}: {type: "signup" | "signin"})=>{
  const navigate = useNavigate();
  const [postInputs,setPostInputs] = useState<SignupType>({
    name:"",
    email:"",
  password:"",
 
  });
async function sendRequest(){
  try {
    const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin" }`,postInputs)
    const jwt=response.data
    localStorage.setItem("token",jwt.jwt);
    navigate("/blogs");
  } catch (error) {
    alert("request failed");
  }
 
}


return <div className="h-screen flex justify-center flex-col items-center">
{/* to verify values of state variables  */}
  {/* {JSON.stringify(postInputs)} */}
<div className="font-bold text-3xl">
create an account
</div>
<div className="mt-3 text-left text-sm font-light ">
{type === "signin" ? "dont have an account?" : "Already have an account"}
 <Link className="underline" 
 to={type=== "signin" ? "/signup" : "/signin"} >
   {type === "signin"? " Signup" : " Signin"}
   </Link>
</div>
{type === "signup" ?
    <LabelledInput label="Name" placeholder="Bimal Pujahari" onChange={(e)=>{
    setPostInputs({
      ...postInputs,
      name: e.target.value
    })
    }}/>:null}
     <LabelledInput label="Email" placeholder="BimalPujahari@gmail.com" onChange={(e)=>{
    setPostInputs({
      ...postInputs,
      email: e.target.value
    })
    }}/>
     <LabelledInput label="Password" type="password" placeholder="asdfhg123#" onChange={(e)=>{
    setPostInputs({
      ...postInputs,
      password: e.target.value
    })
    }}/>
     <button onClick={sendRequest} className="mt-5 w-1/2 bg-black text-white py-2 px-4 rounded-lg">
    {type === "signup" ? "Sign Up" : "Sign in"}
    </button>
</div>
}


interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:string
}
function LabelledInput({ label,placeholder,onChange }:LabelledInputType) {
  return <div className="w-1/2">
<div className="w-full mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        {label}
      </label>
      <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={placeholder}/>
    </div>

  </div>
}