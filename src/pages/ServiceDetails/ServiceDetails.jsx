
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailsCard from '../ServiceDetailsCard/ServiceDetailsCard';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const services = useLoaderData()
    const { id } = useParams()
    console.log(id, services);

    useEffect(() => {
        const service = services?.find(service => service.id === id)
        setService(service);
    }, [services, id])
    return (
        <div>
            {
                <ServiceDetailsCard
                    service={service}
                    key={service.id}
                ></ServiceDetailsCard>
            }
        </div>
    );
};

export default ServiceDetails;