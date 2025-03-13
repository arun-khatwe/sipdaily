import Image from "next/image";
import arrow from "../../../public/assets/images/arrowicon.png";
import image from "../../../public/assets/images/hero.jpg";
import Footer from "./layout/footer/Footer";

const MentoringSection = () => {
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
              <div className="relative w-72 h-auto lg:w-[64%] lg:bottom-36">
                <div className="">
                  <Image
                    src="/assets/images/mentoring.png"
                    alt="Mentor"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                  <Image
                    src="/assets/images/mentor.png"
                    alt="Mentor"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain relative right-20"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content Boxes */}
            <div className="space-y-4">
              {/* Studies */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-xl sm:text-2xl font-serif text-[#3a5a7a] font-medium">
                  Studies
                </h3>
              </div>
              <div className="p-3 space-y-4">
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Apply Biblical truths to everyday trials, such as faith,
                  family, friends, fitness, and finances.
                </p>
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Daily devotions, reading or studies together.
                </p>
              </div>

              {/* Connections */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-xl sm:text-2xl font-serif text-[#3a5a7a] font-medium">
                  Connections
                </h3>
              </div>
              <div className="p-3 space-y-4">
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Connect men so they an learn from each other’s challenges.
                </p>
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Foster faith growth through discipleship.
                </p>
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Communicating with God in prayer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default MentoringSection;
