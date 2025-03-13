import Image from "next/image";
import Footer from "./layout/footer/Footer";
import aboutImage from "../../../public/assets/images/symbol.png";

function AboutTwo() {
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
            <h2 className="text-lg text-[#355070] sm:text-xl md:text-4xl mb-2 sm:mb-4">
              SIP DAILY INSPIRATION
            </h2>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6">
              SIP Daily Ministries is a men’s ministry that was inspired by the
              Holy Spirit years ago. I was driving and the Holy Spirit gave me
              the words “SIP Daily”. As I sought to understand what the meaning
              of this was, He revealed ”what if men would SIP Daily with Jesus”.
              I thought this was just for Christians, but he said ”no, it’s for
              everyone”. He later gave me the meaning of SIP as Sacrificial,
              Intentional, Purposeful.
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6">
              In my business career, I was always running into men who won in
              the world system but were absolutely losing in the Kingdom’s
              system. I asked The Father, what did he desire me to do with what
              he had revealed to me. I felt a stirring in my life as he made it
              clear for me to get involved and share what he has done through my
              life experiences. He was sending me out to share His truth about
              who He is and His love. (Luke 10:2)
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6">
              I started to meet different men one on one, and most were flying
              upside down. More and more men were coming forward seeking answers
              and assistance. This became harder to meet with everyone as I was
              working for the largest medical device company in the world. I
              knew there had to be a change and so I left the company at the end
              of 2023 to work for The Lord. Since then, I have met with men from
              all walks of life and all ages (16 and up). I have traveled to 8
              different countries while sharing the gospel, preaching and
              praying for so many. I have been so blessed with three men who are
              my modern-day Paul. All have encouraged, spurred me on and loved
              on me as SIP Daily Ministries was being launched. My prayer is
              that men will awaken to all that The Father has for them and
              follow Him.
            </p>
          </div>
        </div>
        <div className="mt-auto pt-8 w-[101%] lg:w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default AboutTwo;
