import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

ChooseUsCard.propTypes = {
  choose: PropTypes.object.isRequired,
};

function ChooseUsCard({ choose }) {
  // console.log(choose)
  const { title, description, image } = choose;
  // console.log(title, description, image);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="border rounded-xl p-5 bg-white relative mt-14"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing=""
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="w-1/4">
        <img
          className="w-20 absolute -top-16 bg-[#b9e2f5] p-3 rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <h3 className="text-xl text-[#50b8e7] font-bold ">{title}</h3>
      <p className="text-[#44635d] text-sm">{description}</p>
    </div>
  );
}

export default ChooseUsCard;
