import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Notfound = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-4 text-center">

      <h1 className="text-7xl sm:text-9xl font-extrabold text-red-500 animate-pulse">
        404
      </h1>

      <p className="text-2xl sm:text-3xl mt-4 text-gray-300">
        Page Not Found
      </p>

      <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        <FaHome />
        Go to Home Page
      </button>

    </div>
  );
};

export default Notfound;