import React from 'react'
import Hero from "./Hero";
import Product from "./Product.jsx";
import Carousel from "./Carousel.jsx";
import SellingProducts from "./SellingProducts.jsx";
import Discount from "./Discount.jsx";
import ProductGrid from "./ProductGrid.jsx";
import Footer from "./Footer.jsx";
export default function Display() {
  return (
    <div>
      <Hero/>
      <Product/>
      <Carousel />
      <SellingProducts />
      <Discount/>
      <ProductGrid/>
      <Footer/>
    </div>
  )
}
