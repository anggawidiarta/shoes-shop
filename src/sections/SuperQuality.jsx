/* eslint-disable no-unused-vars */
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg ">
          We Provide You<span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>

        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          nisi expedita, sint quibusdam aliquid eos non incidunt at alias
          obcaecati quaerat suscipit repellendus sequi, saepe aliquam aspernatur
          praesentium laborum omnis.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
