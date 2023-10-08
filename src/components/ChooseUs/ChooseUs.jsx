import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ChooseUsCard from '../ChooseUsCard/ChooseUsCard';

const ChooseUs = () => {

    const [chooseUS, setChooseUs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/chooseUs.json')
            .then(res => res.json())
            .then(data => {
                setChooseUs(data);
                setLoading(false);
                // console.log(data);
            })

    }, [])

    useEffect(() => {
        AOS.init();
    }, [])

    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }

    return (
        <div className="bg-[#edf7fc] py-20 px-5">
            <h2 className="text-4xl text-[#50b8e7] text-center font-semibold pb-10">Why Choose Us</h2>
            <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {
                    chooseUS?.map(choose => (
                        <ChooseUsCard
                            choose={choose}
                            key={choose.id}
                        ></ChooseUsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ChooseUs;