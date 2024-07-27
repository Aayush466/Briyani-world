import React from "react";
import Img1 from "../../assets/biryani2.png";
import Img2 from "../../assets/biryani4.png";
import Img3 from "../../assets/biryani3.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Veg Biryani",
    description:
    "Veg Briyani  is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of veg  and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Briyani ",
    description:
      "It is made with basmati rice, spices and goat meat. Popular variations use chicken instead of goat meat. There are various forms of Hyderabadi biryani, such as kachay gosht ki biryani or dum biryani, where goat meat is marinated and cooked along with the rice.",
  },
  {
    id: 3,
    img: Img3,
    name: "Dum Briyani ",
    description:
      "This briyani is also known as kachay gosht ki biryani or dum biryani, where the meat is marinated and cooked along with short-grained and fine rice. It is left on a slow fire or dum for a fragrant and aromatic flavour."
  },
];
const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Our Services</h1>
            <p className="text-transform-capitalize">This Are The Variety Of Briyani We Make  </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt="briyani"
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;