import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
  return (
    <div className=" mx-auto border-emerald-800 text-center text-black bg-emerald-400 w-4/5 p-10 rounded-2xl mt-8">
      <h2 className="font-bold text-2xl">Meet Our Users</h2>
      <p className="text-black font-semibold text-xl">Users: {users.length} </p>
      <p>There experience may help you </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;
