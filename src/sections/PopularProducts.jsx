/* eslint-disable no-unused-vars */
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin text-primary">
          Produk
          <span className="text-secondary"> Popular</span> Kami
        </h2>
        <p className="text-justify lg:max-w-xl font-montserrat text-slate-gray">
          Dari jalanan perkotaan hingga petualangan alam liar, setiap langkahmu
          adalah pernyataan gaya dengan koleksi terbaru kami. Dengan desain yang
          memikat dan kenyamanan yang tak tertandingi, setiap detik bersama
          sepatu kami adalah sebuah petualangan gaya yang tak terlupakan.
          Temukan gayamu, tandai jejakmu, hanya di{" "}
          <a href="#">
            <span className="font-bold text-secondary">Toko Sepatu</span>.
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 mt-16 gap-15 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-5 ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
