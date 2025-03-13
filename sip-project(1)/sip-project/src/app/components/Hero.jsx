import Image from "next/image";
import Piechart from "./Piechart";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-16 sm:pt-20 md:pt-24"
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
    >
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Header Text */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12 lg:pl-16 xl:pl-48">
          <h1 className="text-3xl mt-6 sm:mt-0  sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 tracking-wide text-[#355070]">
            SIP DAILY MINISTRIES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-serif">
            Glorify God by living Sacrificial, Intentional, Purposeful daily for
            Him.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center justify-center space-y-12 lg:space-y-0 lg:flex-row lg:space-x-16 xl:space-x-24">
          {/* Piechart - takes full width on mobile, constrained on larger screens */}
          <div className="">
            
            <Image
              src="/assets/images/SIP.png"
              alt="Bible and cup"
              height={500}
              width={550}
            />
          </div>

          {/* Image and Quote Section */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-md text-center lg:text-left">
            <div className="mb-4 sm:mb-6 relative">
              <div className="relative w-full h-48 sm:h-64 md:h-72">
                <Image
                  src="/assets/images/hero.jpg"
                  alt="Bible and cup"
                  fill
                  className="object-cover shadow-lg rounded-md"
                />
              </div>
            </div>
            <blockquote className="text-base sm:text-lg text-black font-serif">
              "But whoever drinks the water I give will never thirst; it will
              become a spring welling up to eternal life."
              <footer className="text-right mt-2">~ John 4:14</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
