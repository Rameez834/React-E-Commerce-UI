import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">

          <img
            src="https://cdn5.f-cdn.com/contestentries/1855250/39456511/5fc554ad9e60d_thumb900.jpg"
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-2xl font-bold text-blue-400">
            NovaWear
          </h1>

        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm sm:text-base">

          <Link className="hover:text-blue-400 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-400 transition" to="/About">
            About
          </Link>

          <Link className="hover:text-blue-400 transition" to="/Contact">
            Contact
          </Link>

          <Link className="hover:text-blue-400 transition" to="/Product">
            Product
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;