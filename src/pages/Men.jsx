const Men = () => {

  const products = [
    {
      id: 1,
      name: "Black T-Shirt",
      price: "$20",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 2,
      name: "Blue Jeans",
      price: "$40",
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d"
    },
    {
      id: 3,
      name: "Sneakers",
      price: "$60",
      img: "https://bugattishoes.in/cdn/shop/files/322-A9S01-6900-4100.jpg?v=1762412735"
    },
    {
      id: 4,
      name: "Jacket",
      price: "$80",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
    }
  ]

  return (
    <div className="min-h-screen p-10 bg-gray-100">

      <h1 className="text-4xl font-bold text-center mb-10">
        Men Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition duration-300"
          >

            <img
              src={item.img}
              alt={item.name}
              className="h-40 w-full object-cover rounded-md mb-4"
            />

            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.price}</p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Buy Now
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Men