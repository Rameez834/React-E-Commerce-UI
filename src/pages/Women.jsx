const Women = () => {

  const products = [
    {
      id: 1,
      name: "Red Dress",
      price: "$50",
      img: "https://ae-pic-a1.aliexpress-media.com/kf/Se4fa09f48b804db6b6a72e13a3f6f56eS.jpg"
    },
    {
      id: 2,
      name: "Handbag",
      price: "$35",
      img: "https://m.media-amazon.com/images/I/71439fAJiQL._AC_UY1000_.jpg"
    },
    {
      id: 3,
      name: "Heels",
      price: "$70",
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
    },
    {
      id: 4,
      name: "Jacket",
      price: "$90",
      img: "https://www.alanpaine.co.uk/cdn/shop/products/rutland-ladies-tweed-waterproof-shooting-coat-lichen.jpg?v=1629879592"
    }
  ];

  return (
    <div>

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-pink-600">
        Women Products
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

              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">
                Buy Now
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Women;