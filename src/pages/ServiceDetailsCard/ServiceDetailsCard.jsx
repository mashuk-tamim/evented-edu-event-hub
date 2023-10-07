
import PropTypes from 'prop-types';

ServiceDetailsCard.propTypes = {
    service: PropTypes.object.isRequired,
};

function ServiceDetailsCard({ service }) {
    const { name, detailedDescription, image, price } = service;

    const handleGoBack = () => {
        window.history.back();
    }

    return (
        <div className='p-10 bg-[#c8e8e0] font-montserrat space-y-5'>
            <img className="rounded-lg" src={image} alt={name} />
            <h3 className="text-3xl text-[#2e937a] font-bold">{name}</h3>
            <p className="text-[#44635d] text-justify">{detailedDescription}</p>
            <p className='text-[#44635d] font-semibold'>Price: {price}</p>
            <div className='text-center'>
                <button className='btn bg-[#2e937a] text-white w-1/6' onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
}

export default ServiceDetailsCard;