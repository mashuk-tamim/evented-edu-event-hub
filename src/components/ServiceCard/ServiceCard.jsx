import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

function ServiceCard({ service }) {
    // console.log(service)
    const { id, name, shortDescription, image, price } = service;
    // console.log(id, name, shortDescription, detailedDescription, image, price, date, location)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
      <div
        className="flex flex-col lg:flex-row gap-5 border rounded-xl p-5 lg:p-10 bg-white space-y-2 h-[630px] lg:h-auto"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
          <img className="" src={image} alt={name} />
        </div>
        <div className="flex flex-col justify-end lg:justify-center h-1/2 lg:h-full">
          <h3 className="text-xl text-[#2e937a] font-bold ">{name}</h3>
          <p className="text-[#44635d]">{shortDescription}</p>
          <p className="text-[#44635d] font-semibold">{price}</p>
          <Link to={`/service/${id}`}>
            <button className="btn bg-[#2e937a] text-white w-full lg:w-1/3 mt-3">
              view details
            </button>
          </Link>
        </div>
      </div>
    );
}

export default ServiceCard;