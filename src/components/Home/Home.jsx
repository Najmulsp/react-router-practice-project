import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="text-center">
      <Header></Header>
      {/* <h2>this is outlet </h2>
            <h1>Navbar</h1> */}
      <nav className="text-center text-amber-500 space-x-4">
        <NavLink
          to="/"
          className={({ isActive}) =>
            isActive ? "underline bg-zinc-600 px-3 py-2 rounded-lg " : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive}) =>
            isActive ? "underline bg-zinc-600 px-3 py-2 rounded-lg " : ""
          }
        >
           About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive}) =>
            isActive ? "underline bg-zinc-600 px-3 py-2 rounded-lg " : ""
          }
        >
          Contact us
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive}) =>
            isActive ? "underline bg-zinc-600 px-3 py-2 rounded-lg " : ""
          }
        >
          Our Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive}) =>
            isActive ? "underline bg-zinc-600 px-3 py-2 rounded-lg " : ""
          }
        >
          Posts
        </NavLink>

      </nav>

      {navigation.state === "loading" ? "Loading..." : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
