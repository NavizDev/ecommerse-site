import React from "react"
import ProductCard from "./ProductCard"

const Products = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  )
}

export default Products
