import { Appbar } from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Publish=()=>{
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const navigate=useNavigate();
return <div>

<Appbar/>
<div className="flex flex-col">
<input onChange={(e)=>{
          setTitle(e.target.value)
}} type="text" className="text-5xl border  border-transparent border-stone-100  focus:outline-none p-4 mt-8 ml-40" placeholder="Title"/>

<textarea
onChange={(e)=>{setDescription(e.target.value)}}
id="message" className="h-80 text-xl border  border-transparent border-stone-100  focus:outline-none p-4 pt-3 ml-40 " placeholder="Tell Your Story..."></textarea>
</div>
<button onClick={async ()=>{
const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
          title,
          content:description
},{
          headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }
});
navigate(`/blog/${response.data.id}`)
}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-40">Publish</button>


</div>
}