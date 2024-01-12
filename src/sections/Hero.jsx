/* eslint-disable react/jsx-key */
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <section
        id="home"
        className="w-full border-2 flex flex-col xl:flex-row min-h-screen justify-center gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Collection
          </p>

          <h1 className="font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82]">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>

          <p className="font-montserrat text-slate-gray text-lg mt-6 leading-8 mb-14 sm:max-w-sm">
            Temukan Gaya Berpakaian Paling Keren Bagi Anda Disini
          </p>
          <Button label="Shop Now" iconUrl={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className=" text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="Show Collection"
            width={610}
            height={510}
            className="object-contain relative z-10"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
            {shoes.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
