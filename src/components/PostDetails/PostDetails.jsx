import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {title, body, id} = post;

    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2 className="font-bold text-3xl text-center p-6">Details About Each User Post</h2>
            <div className=" w-96 mx-auto p-10 rounded-2xl bg-slate-700">
            <p className="font-bold text-3xl text-center p-6 text-slate-900">Post No: {id}</p>
            <p className="text-2xl font-semibold pt-3"><span className="underline font-bold text-slate-900">Title:</span> {title}</p>
            <p className="text-2xl font-semibold pt-3 "><span className="underline font-semibold text-slate-900">Description:</span> {body}</p>
            <button onClick={handleGoBack} className="btn ml-28">Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;