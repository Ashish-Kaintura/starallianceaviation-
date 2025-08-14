import Video1 from "../video/Part_1.mp4";
import Video2 from "../video/Mobile view.mp4";
const HeroSection = () => (
  // <section
  //   style={{
  //     backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/slider/cache/4270373fa999cbea84885420d65be5b2/banner01.jpg)`,
  //   }}
  //   className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-screen"
  // >
  //   <div className="w-[1300px] mt-8">
  //     <div className="bg-white text-blue-800 p-5 max-w-lg ">
  //       <h1 className="text-4xl font-bold leading-tight font-heading">
  //         WELCOME TO STAR ALLIANCE AVIATION ACADEMY
  //       </h1>
  //       <p className="mt-4  text-black text-lg font-sans">
  //         We are a team of passionate and dedicated professionals who are
  //         committed to providing the highest quality products and services to
  //         our customers.
  //       </p>
  //     </div>

  //   </div>
  // </section>
  <>
    <div className="sm:flex hidden">
      <video
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        src={Video1}
      />
    </div>
    <div className="flex sm:hidden">
      <video
        className="pt-20 w-full object-contain"
        autoPlay
        loop
        muted
        playsInline
        src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/video/Mobile%20view.mp4"
      />
    </div>
  </>
);

export default HeroSection;
