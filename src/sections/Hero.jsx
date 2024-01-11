import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full border-2 flex xl:flex-row min-h-screen justify-center gap-10 max-container p-2"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p>Our Collection</p>
          <h1>
            <span>The New Arrival</span>
            <br />
            <span>Nike</span>
            Shoes
          </h1>
          <p>Temukan Gaya Berpakaian Paling Keren Bagi Anda Disini</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
