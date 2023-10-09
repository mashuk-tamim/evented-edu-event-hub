import Banner from "../../components/Banner/Banner";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            {/* <h2 className="text-4xl font-bold text-center font-bebasNeue">This is home</h2> */}
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;