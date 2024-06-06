import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog=({ blog }:{blog:Blog})=>{
return <div>
 <Appbar/>
 <div className="flex justify-center">
  <div className="grid grid-cols-12 px-10 w-full pt-200">
<div className="col-span-8 mt-12 ml-8">
<div className="text-5xl font-extrabold ">
          {blog.title}
</div>
<div className="pt-3 font-normal text-stone-600">posted on 6th June 2024</div>
<div className="pt-3 text-stone-800 pr-12">{blog.content}</div>
</div>
<div className="col-span-4 flex justify-center flex-col">
<div className="pt-12 font-semibold pl-7">Author</div>
<div className="flex w-full">
<div className="pt-9"><Avatar name={blog.author.name || "Unknown"}/></div>

<div>
<div className="text-xl font-bold pt-4 pl-3">{blog.author.name || "Unknown"}</div>
<div className="text-stone-600 pt-3 text-sm pl-3">Master of Myths,Purveyor of puns and the funniest person in the kingdom</div>
</div>

</div>

</div>

</div>
</div>
</div>
}