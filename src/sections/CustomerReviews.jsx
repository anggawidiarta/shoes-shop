import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-bold text-center font-palanquin">
        What Our <span className="text-coral-red">Customers </span>
        Say ?
      </h3>
      <p className="max-w-lg m-auto mt-4 text-center info-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt error
        velit rem aliquam vitae vel iste hic fugiat expedita ratione, laboriosam
        obcaecati voluptatum pariatur alias temporibus quia molestias debitis
        atque!
      </p>

      <div className="flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
