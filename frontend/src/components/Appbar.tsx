import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar=()=>{
return <div className="border-b flex justify-between px-10 py-3">
<Link to={"/blogs"}><div className="cursor-pointer text-lg">Medium</div></Link>

<div>
<Link to={`/publish`}>
<button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-3 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 mr-9">New</button>
</Link>
<Avatar name={"kolin"}/>
          
</div>

</div>
}