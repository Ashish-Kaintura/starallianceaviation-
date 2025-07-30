const HeroSection = () => (
  <section
    style={{
      backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/slider/cache/4270373fa999cbea84885420d65be5b2/banner01.jpg)`,
    }}
    className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-screen"
  >
    <div className="w-[1300px]">
      <div className="bg-white text-blue-800 p-5 max-w-lg ">
        <h1 className="text-4xl font-bold leading-tight">
          WELCOME TO STAR ALLIANCE AVIATION ACADEMY
        </h1>
        <p className="mt-4 text-base text-black text-lg">
          We are a team of passionate and dedicated professionals who are
          committed to providing the highest quality products and services to
          our customers.
        </p>
      </div>
      {/* <img src="" alt="Cabin Crew" className="w-full max-w-md mt-8 lg:mt-0" /> */}
    </div>
  </section>
);

export default HeroSection;
