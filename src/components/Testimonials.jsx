import React from "react";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              unde!
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
              src="https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
            />
            {/* Testimonial content */}
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              unde!
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-black mt-4 mb-2"></span>
            <h2 className="title-font font-medium text-sm tracking-wider">
              Bruno Sony
            </h2>
            <p className="text-gray-500">Senior Producer</p>
          </div>
          <div className="h-full text-center mb-5 p-5 bg-blue-200 hover:bg-red-200 rounded-2xl md:w-1/3">
            <img
              className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 justify-center items-center"
              src="https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
            />
            {/* Testimonial content */}
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              unde!
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-black mt-4 mb-2"></span>
            <h2 className="title-font font-medium text-sm tracking-wider">
              Bruno Sony
            </h2>
            <p className="text-gray-500">Senior Producer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
