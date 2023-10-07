import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ChooseUs = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div className="bg-[#c8e8e0] py-20">
            <h2 className="text-4xl text-[#2e937a] text-center font-semibold pb-10">Why Choose Us</h2>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 lg:px-16">
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                >
                    <img src="https://i.ibb.co/b6MLzgc/checklist.png" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold ">Comprehensive Listings</h3>
                    <p className="text-[#44635d] text-sm">Access a vast database of diverse educational and training events, all neatly categorized for easy navigation and exploration.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;