
import PropTypes from 'prop-types';

ServiceDetailsCard.propTypes = {
    service: PropTypes.object.isRequired,
};

function ServiceDetailsCard({service}) {
    console.log(service);
    const {id, name, shortDescription, detailedDescription, image, price } = service;
    console.log(id, name, shortDescription, detailedDescription, image, price)
    return (
        <div className='p-10 bg-[#c8e8e0] font-montserrat'>
            <img className="rounded-lg" src={image} alt={name} />
            <h3 className="text-3xl text-[#2e937a] font-bold">{name}</h3>
            <p className="text-[#44635d] text-justify">{detailedDescription}</p>
            <p className='text-[#44635d] font-semibold'>Price: {price}</p>
        </div>
    );
}

export default ServiceDetailsCard;