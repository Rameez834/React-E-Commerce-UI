import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Notfound from './pages/Notfound'

import { FaHome } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const App = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navbar />

      <div className="flex-1 p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Product" element={<Product />}>
            <Route path="Men" element={<Men />} />
            <Route path="Women" element={<Women />} />
          </Route>

          <Route path="/Product/:id" element={<Product />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      
      <div className="flex justify-center items-center gap-6 p-5 bg-white shadow-md border-t">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition shadow"
        >
          <FaHome />
          Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition shadow"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          onClick={() => navigate(1)}
          className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition shadow"
        >
          Next
          <FaArrowRight />
        </button>

      </div>

    </div>
  )
}

export default App