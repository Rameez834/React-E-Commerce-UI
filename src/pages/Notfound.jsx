import { useNavigate } from "react-router-dom"
import { FaHome } from "react-icons/fa";

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4">

      <h1 className="text-8xl font-extrabold text-red-500 animate-pulse">
        404
      </h1>

      <p className="text-2xl mt-4 text-gray-300">
        Page Not Found
      </p>

      <p className="text-sm text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
      >
        <FaHome />
        Go to Home Page
      </button>

    </div>
  )
}

export default NotFound