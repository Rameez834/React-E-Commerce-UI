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
  ];

  return (
    <div>

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Men Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {item.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.price}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Men;