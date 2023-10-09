import PropTypes from "prop-types";
import { CiCalendarDate } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";

BlogCards.propTypes = {
  blog: PropTypes.object.isRequired,
};

function BlogCards({ blog }) {
//   console.log(blog);
  const {author, category, content, date, title} = blog;
  return (
    <div className="border bg-gray-100 flex flex-col md:flex-row">
      <div className="space-y-3 bg-gray-900 p-2 text-gray-200 md:w-1/2">
        <h2 className="font-bold text-lg">{title}</h2>
        <h3 className="flex items-center gap-1">
          <BiUserCircle></BiUserCircle>
          {author}
        </h3>
        <div className="flex md:flex-col justify-between text-gray-400">
          <p className="font-semibold flex items-center gap-1">
            <p className="flex items-center gap-1">
              <TbCategory2></TbCategory2>
              {category}
            </p>
          </p>
          <p className="flex items-center gap-1">
            <CiCalendarDate></CiCalendarDate>
            {date}
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <p className="p-2 md:p-4 lg:p-6 text-justify">{content}</p>
      </div>
    </div>
  );
}

export default BlogCards;
