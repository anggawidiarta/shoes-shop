const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? `border-secondary`
          : `border-transparent`
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={130}
          height={110}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
