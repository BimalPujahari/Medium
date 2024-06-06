import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
export const Blogs=()=>{
const { loading, blogs }=useBlogs();

if(loading){
return <div>
<Appbar/>
<div className="pl-80 ml-40">
<div className="max-w-5xl">
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
</div>
</div>
</div> 

}
return <div>
<Appbar/>
 <div className="pl-80 ml-20">
<div className=" max-w-xl">
{blogs.map(blog =>
          <BlogCard 
          id={blog.id}
          authorName={blog.author.name || "unknown"}
          title={blog.title}
          content={blog.content}
          publishedDate={"22/2/24"}
          />
)}
 
  
 </div>
 </div>
 </div>
}