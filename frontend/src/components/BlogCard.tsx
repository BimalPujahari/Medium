import { Link } from "react-router-dom";

interface BlogCardProps {
authorName: string;
title: string;
content:string;
publishedDate:string;
id:string;
}

export const BlogCard=({
id,
authorName,
title,
content,
publishedDate
}:BlogCardProps)=>{
return <Link to={`/blog/${id}`}>
 <div className="p-4 cursor-pointer">
<div className="flex">
<div className="flex justify-center flex-col"><Avatar name={authorName}/> </div>
 <div className="text-sm font-medium ml-3 flex justify-center flex-col">
 {authorName} 
 </div>
<div className="font-extralight text-sm ml-5 flex justify-center flex-col" > {publishedDate}</div>
 
</div>
<div className="text-xl font-sans font-bold mt-2">
  {title}
</div>
<div className="text-sm mt-0.5 font-normal">
  {content.slice(0,200)+"...."}
</div>
<div className="text-xs font-extralight text-zinc-700 mt-5">
{`${Math.ceil(content.length/100)} min read `}
</div>
<div className="bg-zinc-100 h-0.5 w-full mt-6"></div>
</div></Link>
}


export function Avatar({ name }:{ name:string }) {
return <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
<span className="text-base font-medium text-gray-600 dark:text-gray-100">{name[0].toUpperCase()}</span>
</div>
}