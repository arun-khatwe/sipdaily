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
            <h2 className="text-lg text-[#355070] sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Vision
            </h2>
            <p className="text-base sm:text-lg font-serif text-gray-900">
              Glorifying God by reaching men in the community and around the
              world; while providing resources to assist, help, and grow in
              their love and understanding of Jesus.
            </p>

            <h2 className="text-lg text-[#355070] sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-4">
              Goal
            </h2>
            <p className="text-base sm:text-lg font-serif text-gray-900">
              Bring men into a daily relationship with Jesus that is centered
              around biblical truths, so they lead spiritually in their homes
              and communities. While cultivating the life Jesus desires, not the
              world.
            </p>
          </div>
        </div>

       
        <div className="mt-auto pt-8 w-[101%] lg:w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default About;
