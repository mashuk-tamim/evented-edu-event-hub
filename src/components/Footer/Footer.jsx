import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className=" p-5 md:p-10 text-white rounded space-y-3 md:space-y-5 flex flex-col items-center">
        <div className="flex gap-3 md:gap-5 lg:gap-10 text-sm md:text-base text-center">
          <Link to="/">Home</Link>
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <div className="flex gap-3 md:gap-5 lg:gap-10 mx-auto">
            <Link>
              <img
                className="w-6 md:w-10"
                src="https://i.ibb.co/zhkdM6g/facebook.png"
                alt="facebook"
              />
            </Link>
            <Link>
              <img
                className="w-6 md:w-10"
                src="https://i.ibb.co/dDBQV4v/instagram.png"
                alt="instagram"
              />
            </Link>
            <Link>
              <img
                className="w-6 md:w-10"
                src="https://i.ibb.co/Ldtpsmp/linkedin.png"
                alt="linkedin"
              />
            </Link>
            <Link>
              <img
                className="w-6 md:w-10"
                src="https://i.ibb.co/h25JHxq/twitter.png"
                alt="linkedin"
              />
            </Link>
            <Link>
              <img
                className="w-6 md:w-10"
                src="https://i.ibb.co/CWnVNbc/youtube.png"
                alt="youtube"
              />
            </Link>
          </div>
        </div>
        <aside>
          <p className="text-gray-300 text-xs">
            Copyright © 2023 - All right reserved by EventEd.com
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
