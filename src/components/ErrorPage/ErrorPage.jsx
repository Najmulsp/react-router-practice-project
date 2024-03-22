import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2 className="text-6xl font-bold text-center p-40">Oops!</h2>
            <p className="text-center text-2xl">{error.statusText || error.message}</p>
            {
                error.status === 404 && <div className="text-center text-lg p-2">
                    <p>Go back to home</p>
                    <Link to="/"><button className="btn m-3 bg-slate-700">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;