
import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState();

  console.log(testimonials);
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="font-montserrat bg-[#ffcccb4e] p-5 md:p-10">
      <h2 className="text-4xl text-red-700 text-center font-semibold py-16 md:mb-20">
        Testimonial
      </h2>
      <div className="flex flex-col gap-5">
        {testimonials?.map((testimonial) => (
          <TestimonialCard
            testimonial={testimonial}
            key={testimonial.id}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
