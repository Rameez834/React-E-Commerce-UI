import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white shadow-md">
      
      <div className="flex items-center gap-2">
        <img 
          src="https://cdn5.f-cdn.com/contestentries/1855250/39456511/5fc554ad9e60d_thumb900.jpg" 
          alt="" 
          className="w-8 h-10 object-contain"
        />

        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          NovaWear
        </h1>
      </div>

      <div className="flex gap-8 text-lg">
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
    </nav>
  )
}

export default Navbar