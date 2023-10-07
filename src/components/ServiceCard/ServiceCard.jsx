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
            className="border rounded-xl p-5 lg:p-10 bg-white space-y-2"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <img className="" src={image} alt={name} />
            <h3 className="text-xl text-[#2e937a] font-bold ">{name}</h3>
            <p className="text-[#44635d]">{shortDescription}</p>
            <p className='text-[#44635d] font-semibold'>{price}</p>
            <Link to={`/service/${id}`}><button className="btn bg-[#2e937a] text-white w-full mt-3">view details</button></Link>
        </div>
    );
}

export default ServiceCard;