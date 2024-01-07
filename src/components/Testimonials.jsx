import React from "react";
import { ImQuotesLeft } from "react-icons/im";
const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto p-10 md:flex md:flex-col">
        <div className="text-center py-10">
          <h5>Testimonials</h5>
          <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
            Read What Others Have To Say
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div className="h-full text-center mb-5 p-5 bg-blue-200 hover:bg-red-200 rounded-2xl md:w-1/3">
            <img
              className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 justify-center items-center"
              src="https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
            />
            {/* Testimonial content */}
            <p className="leading-relaxed">
              <span>
                <ImQuotesLeft />
              </span>
              The Developmental Support Workers have been a blessing to our
              family. Their commitment to creating individualized plans and
              their patience in nurturing skills have truly made a positive
              impact on our loved one's life.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-black mt-4 mb-2"></span>
            <h2 className="title-font font-medium text-sm tracking-wider">
              Bruno Sony
            </h2>
            <p className="text-gray-500">Senior Producer</p>
          </div>
          {/* Repeat similar structure for other testimonials */}
          <div className="h-full text-center mb-5 p-5 bg-blue-200 hover:bg-red-200 rounded-2xl md:w-1/3">
            <img
              className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 justify-center items-center"
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            {/* Testimonial content */}
            <p className="leading-relaxed">
              <span>
                <ImQuotesLeft />
              </span>
              The 24/7 nursing support has been a lifeline for us. Their
              reliability and understanding during challenging times have been
              invaluable. We are grateful for their unwavering commitment highly
              recommend their services the best.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-black mt-4 mb-2"></span>
            <h2 className="title-font font-medium text-sm tracking-wider">
              Eva Patrice
            </h2>
            <p className="text-gray-500">Business Owner</p>
          </div>
          <div className="h-full text-center mb-5 p-5 bg-blue-200 hover:bg-red-200 rounded-2xl md:w-1/3">
            <img
              className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 justify-center items-center"
              src="https://images.pexels.com/photos/3764571/pexels-photo-3764571.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            {/* Testimonial content */}
            <p className="leading-relaxed">
              <span>
                <ImQuotesLeft />
              </span>
              The nursing team's empathy and dedication were evident from the
              start. Their attention to detail and compassionate care were
              reassuring during a difficult time. We couldn't have asked for
              better support.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-black mt-4 mb-2"></span>
            <h2 className="title-font font-medium text-sm tracking-wider">
              Jake Oliver
            </h2>
            <p className="text-gray-500">Music Producer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
