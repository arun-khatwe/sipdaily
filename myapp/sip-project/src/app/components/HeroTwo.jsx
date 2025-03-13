import { ArrowDownCircle } from "lucide-react";
import Footer from "./layout/footer/Footer";
import Image from "next/image";

const HeroTwo = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
    >
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        {/* Main content container with flex for vertical centering */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24 flex-grow">
          {/* Left side - Circular Flow - Scales based on screen size */}
          <div className="w-full max-w-2xl lg:max-w-3xl">
            <Image
              src="/assets/images/hero_two.png"
              alt="Bible and cup"
              height={700}
              width={700}
            />
          </div>

          {/* Right side - Text Box */}
          <div className="w-full max-w-md lg:max-w-lg lg:w-1/2 mt-8 lg:mt-0 lg:ml-12">
            <div className="flex justify-center items-center">
              <Image
                src="/assets/images/Frame.png"
                alt="Bible and cup"
                layout="intrinsic"
                height={500}
                width={550}
              />
            </div>
          </div>
        </div>

        {/* Footer wrapper with proper spacing */}
        {/* <div className="mt-auto pt-8">
          <Footer />
        </div> */}
      </div>
    </section>
  );
};

export default HeroTwo;
