import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating = "4" }) => {
  return (
    <>
      <div className="flex flex-col flex-1 w-full max-sm:w-full max-sm:justify-center max-sm:items-center ">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-xl"
        />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="text-xl leading-normal font-montserrat text-slate-gray">
            ({rating})
          </p>
        </div>
        <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin text-primary">
          {name}
        </h3>
        <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-secondary">
          {price}
        </p>
      </div>
    </>
  );
};

export default PopularProductCard;
