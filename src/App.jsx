import Hero from "./sections/Hero";
import Services from "./sections/Services";
import PopularProducts from "./sections/PopularProducts";
import Footer from "./sections/Footer";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffer from "./sections/SpecialOffer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="py-10 padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe />
      </section>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>
    </main>
  );
}
