import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, website, email, phone } = user;

    return (
        <div className=" mt-6   border-emerald-800 rounded-2xl p-10 space-y-2 bg-emerald-600">
            <img className="rounded-xl" src="https://i.ibb.co/G0LpvDv/Rectangle-1.png" alt="" />
            <h2 className="font-semibold text-2xl">Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link className="text-amber-500 font-semibold text-xl" to={`/user/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;