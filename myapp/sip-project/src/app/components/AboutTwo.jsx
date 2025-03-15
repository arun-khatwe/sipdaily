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
            <h2 className="text-lg text-[#355070] sm:text-xl md:text-4xl mb-2 sm:mb-4" style={{ fontFamily: 'Algerian' }}>
              <strong>The Story of SIP Daily Ministries</strong>
            </h2>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6" style={{ fontFamily: 'Algerian' }}>
              SIP Daily Ministries is a men’s ministry born from a vision the Holy Spirit gave me years ago. While driving one day, I distinctly heard the words, <strong>SIP Daily</strong>.
              Curious and seeking understanding, I asked the Lord what it meant. He revealed the powerful question: <strong>What if men would SIP Daily with Jesus?</strong>
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6" style={{ fontFamily: 'Algerian' }}>
              At first, I assumed this was meant for Christians alone, but the Holy Spirit made it clear: <strong>No, it’s for everyone</strong>. In time, He revealed that SIP stood for <strong>Sacrificial, Intentional, Purposeful</strong> — a framework for pursuing a deeper relationship with Jesus.
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6" style={{ fontFamily: 'Algerian' }}>
              Throughout my business career, I often encountered men who seemed successful by the world’s standards yet were struggling spiritually — winning in the world’s system but losing in the Kingdom’s. I asked the Father what He wanted me to do with what He had shown me. I felt a strong stirring in my heart as He called me to step out and share what He had done in my life. He was sending me out to reveal His truth, His love, and His purpose for men. (Luke 10:2)
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6" style={{ fontFamily: 'Algerian' }}>
              I began meeting with men one-on-one, and I quickly realized that many were <strong>“flying upside down”</strong> — overwhelmed, lost, or unsure of how to lead spiritually. As more and more men sought guidance and support, balancing this ministry with my demanding career at the world’s largest medical device company became increasingly difficult. It became clear that a change was needed. In obedience, I left my career at the end of 2023 to devote myself fully to the work God had called me to.
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6" style={{ fontFamily: 'Algerian' }}>
              Since then, I’ve had the opportunity to connect with men from all walks of life, ranging from teenagers to seasoned leaders. I’ve traveled to eight different countries, sharing the gospel, preaching, and praying with countless men. Throughout this journey, God has blessed me with three incredible men — my modern-day Pauls — who have encouraged me, challenged me, and poured into me as SIP Daily Ministries took shape.
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-900 pb-6" style={{ fontFamily: 'Algerian' }}>
              My prayer is that men everywhere will awaken to the fullness of what the Father has for them — embracing a life that is <strong>Sacrificial, Intentional, and Purposeful</strong> as they walk daily with Jesus.
            </p>
          </div>
        </div>
        <div className="mt-auto pt-8 w-[101%] lg:w-full">
          {/* <Footer /> */}
        </div>
      </div>
    </section >
  );
}

export default AboutTwo;
