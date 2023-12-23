import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Solving your staffing issues</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
