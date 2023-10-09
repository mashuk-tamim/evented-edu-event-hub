import { FcClock, FcOvertime, FcGlobe } from "react-icons/fc";
import PropTypes from "prop-types";

UpcomingCards.propTypes = {
  upcomingEvent: PropTypes.object.isRequired,
};

function UpcomingCards({ upcomingEvent }) {
//   console.log(upcomingEvent);
  const { title, date, time, location, description } = upcomingEvent;
  return (
    <div className="border rounded-xl h-[500px] bg-gray-100 ">
      <div className="space-y-3 bg-gray-900 h-1/3 p-2 rounded-t-xl text-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex justify-between text-gray-400">
          <p className="flex items-center gap-1">
            <FcClock></FcClock>
            {time}
          </p>
          <p className="flex items-center gap-1">
            <FcOvertime></FcOvertime>
            {date}
          </p>
        </div>
        <p className="text-gray-400 flex items-center gap-1"><FcGlobe></FcGlobe>{location}</p>
      </div>
      <div className="">
        <p className="p-2 md:p-4 lg:p-6 text-justify">{description}</p>
      </div>
    </div>
  );
}

export default UpcomingCards;
