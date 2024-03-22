import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className=" w-4/5 mx-auto p-10 rounded-2xl bg-slate-600 text-center mt-6 ">
            <h2 className="text-2xl font-semibold pt-3">All Posts: {posts.length} </h2>
            <div className="  grid grid-cols-1 lg:grid-cols-3 gap-6" >

            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;