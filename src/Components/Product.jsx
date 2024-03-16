import React from "react";

const Product = () => {
  const addtocart = (name,id,price)=>{
    let data = [name,id,price];
    console.log(data);
  }
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: "./images/product-1.webp",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Striped Tee",
      href: "#",
      imageSrc: "./images/product-2.webp",
      imageAlt: "Front of men's Striped Tee in white.",
      price: "$45",
      color: "White",
    },
    {
      id: 3,
      name: "Crewneck Sweatshirt",
      href: "#",
      imageSrc: "./images/product-3.webp",
      imageAlt: "Front of men's Crewneck Sweatshirt in grey.",
      price: "$65",
      color: "Grey",
    },
    {
      id: 4,
      name: "Slim Fit Jeans",
      href: "#",
      imageSrc: "./images/product-4.webp",
      imageAlt: "Front of men's Slim Fit Jeans in blue.",
      price: "$75",
      color: "Blue",
    },
    {
      id: 5,
      name: "Slim Fit Chinos",
      href: "#",
      imageSrc: "./images/product-5.webp",
      imageAlt: "Front of men's Slim Fit Chinos in tan.",
      price: "$65",
      color: "Tan",
    },
    {
      id: 6,
      name: "V-Neck Sweater",
      href: "#",
      imageSrc: "./images/product-6.webp",
      imageAlt: "Front of men's V-Neck Sweater in grey.",
      price: "$95",
      color: "Grey",
    },
    {
      id: 7,
      name: "Bomber Jacket",
      href: "#",
      imageSrc: "./images/product-7.webp",
      imageAlt: "Front of men's Bomber Jacket in green.",
      price: "$135",
      color: "Green",
    },
    {
      id: 8,
      name: "Hooded Sweatshirt",
      href: "#",
      imageSrc: "./images/product-8.webp",
      imageAlt: "Front of men's Hooded Sweatshirt in black.",
      price: "$85",
      color: "Black",
    },
  ];

  return (
    <>
      <div id = "women" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-[8px] text-gray-900">
                <span className="border-b-2 border-[#7d0d0d] pb-2">NEW</span>{" "}
                PRODUCT
              </h2>
            </div>
            <div
              className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black border-b-2 border-[#7d0d0d] lg:p-0 uppercase text-sm"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase text-sm"
                  >
                    Women's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase text-sm"
                  >
                    Men's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase text-sm"
                  >
                    Kid's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase text-sm"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase text-sm"
                  >
                    Cosmetics
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full overflow-hidden bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                 
                </div>
                <div className="mt-4 flex flex-col justify-center items-center">
                  <div>
                  <center> <button onClick={()=>addtocart(product.name,product.id,product.price)} >Add to cart </button></center>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>{product.name}</a>
                      
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 flex">
                      {/* <FaStar color="#e3c01c" />
                      <FaStar color="#e3c01c" />
                      <FaStar color="#e3c01c" />
                      <FaStar color="#e3c01c" />
                      <FaStar color="#e3c01c" /> */}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
