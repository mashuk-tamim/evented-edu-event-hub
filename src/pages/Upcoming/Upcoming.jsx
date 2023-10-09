import { useLoaderData } from "react-router-dom";
import UpcomingCards from "../UpcomingCards/UpcomingCards";

const Upcoming = () => {
  const upcomingEvents = useLoaderData();
//   console.log(upcomingEvents);

  return (
    <div className="">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl font-montserrat pt-5 text-center border-gray-800 border-b-4 w-1/2 mx-auto">Upcoming Events</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 font-montserrat p-5 gap-5">
        {upcomingEvents.map((upcomingEvent) => (
          <UpcomingCards
            upcomingEvent={upcomingEvent}
            key={upcomingEvent.id}
          ></UpcomingCards>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
