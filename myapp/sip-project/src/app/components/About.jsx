import Image from "next/image";
import aboutImage from "../../../public/assets/images/symbol.png";
import Footer from "./layout/footer/Footer";

const About = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 pt-24 flex-grow flex flex-col">
        {/* Main content container */}
        <div className="flex flex-col items-center w-full">
          {/* Image Section - Responsive sizing with proper aspect ratio */}
          <div className="xl:w-64 h-auto">

            <Image
              src={aboutImage}
              alt="About Image"
              width={400}
              height={400}
              className="object-contain rounded-md shadow-md"
            />

          </div>

          {/* Text Content - Consistent padding and responsive text sizes */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl text-left mt-4 sm:mt-6 md:mt-8">
            <h3 className="text-2xl text-[#355070] sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4" style={{ fontFamily: 'Algerian' }}>
              Mission
            </h3>
            <p className="text-lg sm:text-xl font-serif text-gray-900" style={{ fontFamily: 'Algerian' }}>
              Our mission is to guide men into a daily relationship with Jesus, rooted in biblical truths, empowering them to lead spiritually in their homes and communities. Through this journey, we encourage men to cultivate the life Jesus desires for them—one defined by His purpose rather than the values of the world.
            </p>


          </div>
        </div>


        <div className="mt-auto pt-8 w-[101%] lg:w-full">
          {/* <Footer /> */}
        </div>
      </div>
    </section >
  );
};

export default About;
