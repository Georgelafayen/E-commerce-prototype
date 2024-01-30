import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product"
import Hero from "../components/Hero"

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);

  //get only male's & female's clothing
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filteredProducts);

  return (
    <div>
      <Hero />
      <section className="py-16 ">
        <div className="container px-10 mx-auto md:px-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product
                  product={product}
                  className="w-full h-[300px] bg-slate-500 mb-4"
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;
