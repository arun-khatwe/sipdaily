import Image from "next/image";
import arrow from "../../../public/assets/images/arrowicon.png";
import image from "../../../public/assets/images/hero.jpg";
import Footer from "./layout/footer/Footer";

const Missions = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 lg:pt-40 flex-grow flex flex-col">
        {/* Content Grid */}
        <div className="w-full">
          <div className=" lg:flex lg:justify-start">
            {/* Left Side - Arrow with Men */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-auto lg:w-[68%] xl:w-[72%] lg:bottom-36">
                <Image
                  src="/assets/images/mission.png"
                  alt="Mission"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content Boxes */}
            <div className="space-y-4">
              {/* Equip Communities */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#3a5a7a] font-medium">
                  Equip Communities
                </h3>
              </div>
              <div className="p-3 space-y-4">
                <p className="text-lg font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Travel abroad to share the gospel.
                </p>
                <p className="text-lg font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Provide resources to help individuals, families and
                  communities come to know Jesus.
                </p>
              </div>

              {/* Provide Support */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#3a5a7a] font-medium">
                  Provide Support
                </h3>
              </div>
              <div className="p-3 space-y-4">
                <p className="text-lg font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Offer financial support to meet hardships in life.
                </p>
                <p className="text-lg font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Provide continuing education to support faith and
                  discipleship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 w-full">
          {/* <Footer /> */}
        </div>
      </div>
    </section>
  );
};

export default Missions;
