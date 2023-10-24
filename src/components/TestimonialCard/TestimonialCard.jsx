import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

TestimonialCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

function TestimonialCard({ testimonial }) {
  // console.log(testimonial);
  const { image, name, description } = testimonial;
  console.log(image, name, description);

   useEffect(() => {
       AOS.init();
   }, []);
  return (
      <div
          className="flex flex-col items-center relative mb-10 md:mb-20 lg:mb-32"
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
      >
          <img
              className="w-1/5 rounded-full absolute -top-9 md:-top-16 lg:-top-32 border-white border-8"
              src={image}
              alt=""
          />
          <div className="flex flex-col items-center bg-white pt-12 md:pt-20 lg:pt-28 pb-4 px-4 md:p-10 lg:p-16 space-y-3 md:space-y-5 rounded-2xl">
              <h3 className="font-semibold">{name}</h3>
              <p>
                  <FaQuoteLeft className="text-red-700 text-xl"></FaQuoteLeft>
              </p>
              <p className="text-xs text-justify">{description}</p>
          </div>
      </div>
  );
}

export default TestimonialCard;
