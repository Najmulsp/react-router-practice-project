import { Link, Navigate, useNavigate } from "react-router-dom";





const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className=" w-80 mx-auto p-10 rounded-2xl bg-slate-800 text-center mt-6">
            <p>{id}</p>
            <p>{title}</p>
            <Link className="text-amber-500 font-semibold text-xl" to={`/post/${id}`}>Show details </Link>
            <button onClick={handleShowDetail}  className="btn m-4  bg-slate-900">Post Description</button>
        </div>
    );
};

export default Post;