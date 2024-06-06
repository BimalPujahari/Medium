import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
export const Blog = () => {
const { id } = useParams();
const { loading,blog } =useBlog({
id:id || "",
});

if(loading || !blog){
return <div>
<Appbar/>
 <div className="flex items-center justify-center h-screen ">
<h1 className="text-center text-xl font-bold text-blue-600">
<Spinner/>
</h1>
</div>
</div>
 
}
return <div>
 <FullBlog blog={blog}/>
</div>
}