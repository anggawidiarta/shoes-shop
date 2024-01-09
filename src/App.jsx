import Hero from "./sections/Hero";
import Services from "./sections/Services";
import PopularProducts from "./sections/PopularProducts";
import Footer from "./sections/Footer";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffer from "./sections/SpecialOffer";
import Nav from "./components/nav";

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
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}
