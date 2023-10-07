

const Banner = () => {
    return (
        <div className='relative w-full h-[90vh]'>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <img className='w-full h-full object-cover object-center' src='https://i.ibb.co/xJWYRK3/bg-1.jpg' alt="" />
            <div className='absolute top-1/3 lg:right-20'>
                <h2 className='lg:text-7xl font-bebasNeue text-white text-center md:text-right'>EventEd</h2>
                <h3 className='lg:text-5xl font-bebasNeue text-white text-center md:text-right'>Make your events successful</h3>
            </div>
        </div>
    );
};

export default Banner;