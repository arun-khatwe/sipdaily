import Image from "next/image";
import Footer from "./layout/footer/Footer";

function Description() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 pt-24 flex-grow flex flex-col">
        {/* Main content container */}
        <div className="flex flex-col items-center w-full">
          <Image
            src="/assets/images/description.png"
            alt="description image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="mt-auto pt-8 w-[101%] lg:w-full">
          {/* <Footer /> */}
        </div>
      </div>
    </section>
  );
}

export default Description;
