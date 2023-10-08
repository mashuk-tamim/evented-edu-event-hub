import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer footer-center p-10 text-white rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-5">
            <Link>
              <img
                className="w-10"
                src="https://i.ibb.co/zhkdM6g/facebook.png"
                alt="facebook"
              />
            </Link>
            <Link>
              <img
                className="w-10"
                src="https://i.ibb.co/dDBQV4v/instagram.png"
                alt="instagram"
              />
            </Link>
            <Link>
              <img
                className="w-10"
                src="https://i.ibb.co/Ldtpsmp/linkedin.png"
                alt="linkedin"
              />
            </Link>
            <Link>
              <img
                className="w-10"
                src="https://i.ibb.co/h25JHxq/twitter.png"
                alt="linkedin"
              />
            </Link>
            <Link>
              <img
                className="w-10"
                src="https://i.ibb.co/CWnVNbc/youtube.png"
                alt="youtube"
              />
            </Link>
          </div>
        </nav>
        <aside>
          <p className="text-gray-300">
            Copyright © 2023 - All right reserved by EventEd.com
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
