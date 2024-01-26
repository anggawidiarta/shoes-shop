import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <p className="text-xl font-montserrat text-coral-red">Our Collection</p>

        <h1 className="font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82]">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>

        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Temukan Gaya Berpakaian Paling Keren Bagi Anda Disini
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default SuperQuality;
