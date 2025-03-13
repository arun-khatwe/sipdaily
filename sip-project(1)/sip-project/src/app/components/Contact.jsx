"use client";
import { useState } from "react";
import Footer from "./layout/footer/Footer";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using fetch to submit the form to FormSubmit service
      const response = await fetch(
        "https://formsubmit.co/sipdaily22@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            message: formData.message,
            _subject: `New contact from ${formData.name}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 pt-24 flex-grow flex flex-col">
        {/* Main Content Container - Vertical on mobile, horizontal on lg+ */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-8">
          {/* Symbol/Donation Section - Full width on mobile, left column on lg+ */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start mb-12 lg:mb-0">
            <div className="relative lg:right-12 lg:bottom-12">
              <Image
                src="/assets/images/symbol.png"
                alt="symbol"
                height={500}
                width={550}
                className="w-full max-w-md h-auto mx-auto"
              />
              <div className="text-center lg:text-left mt-4">
                <button className="bg-red-500 text-white py-2 px-4 font-serif text-xl sm:text-2xl">
                  GIVE
                </button>
                <p className="text-xs italic font-serif pt-2">
                  Donations are tax deductible.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Section - Full width on mobile, middle column on lg+ */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-xl sm:text-3xl font-serif font-semibold bg-white shadow-lg p-4 rounded-md mb-6 text-[#355070]">
              Contact Us
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
              <p className="mt-2 font-medium">SIP Daily Ministries</p>
              <p>c/o Chris Grant</p>
              <p>200 Catalan Street</p>
              <p>Greenville, SC 29607</p>
              <p className="mt-4 font-medium">Phone: 864-201-9177</p>
              <p className="font-medium">
                Email:{" "}
                <a
                  href="mailto:sipdaily22@gmail.com"
                  className="text-[#1a365d] underline"
                >
                  sipdaily22@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form Section - Full width on mobile, right column on lg+ */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl sm:text-3xl font-serif font-semibold bg-white shadow-lg p-4 rounded-md mb-6 text-[#355070]">
              Contact Form
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-3 font-serif text-lg"
            >
              <div>
                <label className="block font-medium font-serif">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block font-medium font-serif">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block font-medium font-serif">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full p-2 border rounded-md"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-medium font-serif">
                  Comment/Message:
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 border rounded-md font-serif"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Status message */}
              {submitStatus && (
                <div
                  className={`p-3 rounded-md ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className={`bg-[#1a365d] text-white p-2 w-full rounded-md font-serif mt-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
