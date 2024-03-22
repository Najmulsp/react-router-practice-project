import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, address, city, zipcode } = user;
    return (
        <div className="text-center">
            <h2 className="font-bold text-3xl text-center p-6">Details About Each User</h2>
            <div className=" w-96 mx-auto p-10 rounded-2xl bg-slate-700">
            <p className="text-2xl font-semibold pt-3">Name: {name}</p>
            <p className="mb-4 underline">Details Information</p>
            <p>Find: {website}</p>
            <p>Address: {address.street}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
            </div>
        </div>
    );
};

export default UserDetails;