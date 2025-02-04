import React from "react";

const About = () => {
  const aboutItems = [
    {
      label: "Project Completed",
      number: 25,
    },
    {
      label: "Years of experience",
      number: 6,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md-p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[68ch]">
            At New Image, we are passionate about serving delicious,
            high-quality meals crafted with the freshest ingredients. Our
            journey began with a simple vision: to create a warm and inviting
            space where people can enjoy authentic flavors, exceptional service,
            and a touch of home in every bite. Whether you’re here for a quick
            bite, a family dinner, or a special celebration, we strive to make
            every visit memorable. Our chefs carefully curate each dish,
            blending traditional recipes with modern culinary innovation to
            bring you a diverse menu that satisfies every palate.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            <img
              src="./images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
