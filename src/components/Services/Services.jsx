import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="bg-[#c8e8e0] py-20">
            <h2 className="text-4xl text-[#2e937a] text-center font-semibold pb-10">Our Services</h2>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 lg:px-16">
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img className="" src="https://i.ibb.co/QDWGgnf/listing.jpg" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold ">Event Listings and Information</h3>
                    <p className="text-[#44635d]">Discover upcoming workshops, webinars, and training events with detailed schedules and registration information, all in one place.</p>
                </div>
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img className="" src="https://i.ibb.co/QbGs65Z/ticketing.jpg" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold">Event Registration and Ticketing</h3>
                    <p className="text-[#44635d]">Seamlessly register for events and purchase tickets online, ensuring a hassle-free experience for both attendees and organizers.</p>
                </div>
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img className="" src="https://i.ibb.co/Wt4SXST/promotion.jpg" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold">Event Promotion and Marketing</h3>
                    <p className="text-[#44635d]">Boost event visibility through targeted marketing services, including email campaigns and social media promotions, maximizing audience engagement.</p>
                </div>
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img className="" src="https://i.ibb.co/zQgCt8X/virtualhosting.jpg" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold">Virtual Event Hosting Platform</h3>
                    <p className="text-[#44635d]">Host interactive online events with live streaming, Q&A sessions, and networking features, creating engaging virtual learning experiences.</p>
                </div>
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img className="" src="https://i.ibb.co/Q6y4b7m/resources.jpg" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold">Educational Resources and Materials</h3>
                    <p className="text-[#44635d]">Access a wealth of educational content, including downloadable materials, articles, videos, and exclusive resources, enhancing learning beyond events.</p>
                </div>
                <div
                    className="border rounded-xl p-5 lg:p-10 bg-white"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <img className="" src="https://i.ibb.co/K5mxk9c/training.jpg" alt="" />
                    <h3 className="text-xl text-[#2e937a] font-bold">Career and Training Resources</h3>
                    <p className="text-[#44635d]">Explore comprehensive career guidance resources, from skill development to job search strategies, empowering individuals in their professional journey.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;