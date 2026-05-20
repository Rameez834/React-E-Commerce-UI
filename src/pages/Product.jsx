import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Products Category
      </h1>

      <div className="flex flex-wrap justify-center gap-4">

        <Link
          to="Men"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Men
        </Link>

        <Link
          to="Women"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Women
        </Link>

      </div>

      <div className="mt-10">
        <Outlet />
      </div>

    </div>
  );
};

export default Product;