
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const services = useLoaderData();
    console.log(services)



    return (
        <div className="bg-[#c8e8e0] py-20 px-5 font-montserrat">
            <h2 className="text-4xl text-[#2e937a] text-center font-semibold pb-10">Our Services</h2>
            <div className='grid grid-col-1 md:grid-cols-2 gap-5 lg:gap-16'>
                {
                    services?.map(service => (
                        <ServiceCard key={service.id} service={service}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;