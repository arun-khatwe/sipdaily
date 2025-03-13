import Image from "next/image";
import Footer from "./layout/footer/Footer";

const MenSection = () => {
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
                  src="/assets/images/men.png"
                  alt="Men"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content Boxes */}
            <div className="space-y-4">
              {/* Equip Men */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#3a5a7a] font-medium">
                  Equip Men
                </h3>
              </div>
              <div className="p-3">
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Provide tools to help men lead their families, serve their
                  communities, and grow in their relationship with Jesus.
                </p>
              </div>

              {/* Provide Support */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#3a5a7a] font-medium">
                  Provide Support
                </h3>
              </div>
              <div className="p-3">
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Support men to meet the challenges of modern life while
                  leading a Jesus centered life.
                </p>
              </div>

              {/* Make Disciples */}

              <div className="shadow-lg rounded-md overflow-hidden p-3 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#3a5a7a] font-medium">
                  Make Disciples
                </h3>
              </div>
              <div className="p-3">
                <p className="text-base font-serif text-gray-900 flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Provide opportunities for men to learn and grow in their faith,
                  and to make followers of The Word.
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

export default MenSection;
