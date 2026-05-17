import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Products Category
      </h1>

      <div className="flex justify-center gap-6">

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
        <Outlet/>
      </div>

    </div>
  )
}

export default Product