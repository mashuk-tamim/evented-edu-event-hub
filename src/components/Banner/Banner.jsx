import banner_bg from '../../assets/users/banner2.jpg'

const Banner = () => {
    return (
      <div className="relative w-full h-auto">
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <img
          className="w-full h-full object-cover object-center"
        //   src="https://i.ibb.co/xJWYRK3/bg-1.jpg"
          src={banner_bg}
          alt=""
        />
        <div className="absolute top-1/3 space-y-2 lg:left-20">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-montserrat text-white text-center">
            EventEd
          </h2>
          <h3 className="md:text-xl lg:text-2xl font-montserrat font-semibold text-white text-center">
            Beyond Expectations, Every Event
          </h3>
          <p className="font-montserrat text-white text-center text-xs md:text-sm lg:text-base w-3/4 mx-auto">
            Exceeding expectations is our norm. We design events that go above
            and beyond, delivering unmatched quality and unforgettable moments.
          </p>
        </div>
      </div>
    );
};

export default Banner;