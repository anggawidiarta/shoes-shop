/* eslint-disable no-unused-vars */
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8, shoe9 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg ">
          Kami Memberikan Anda<span className="text-secondary"> Sepatu</span>
          <br />
          <span className="text-secondary"> Berkualitas</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-justify font-montserrat text-slate-gray mb-14 sm:max-w-xl">
          Saatnya untuk melangkah dengan percaya diri dan nyaman setiap hari! Di
          toko kami, kualitas bukanlah pilihan, melainkan janji yang kami pegang
          teguh. Setiap pasang sepatu yang kami tawarkan adalah hasil dari
          dedikasi kami untuk menyajikan yang terbaik bagi Anda
        </p>
        <div className="mt-8">
          <Button label="Lihat Selengkapnya" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        <img
          src={shoe9}
          alt="product detail"
          className="object-contain rounded-xl w-[470px]"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
