import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import ContactForm from "../components/Contactform";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-gray-900 text-white py-20 px-6 md:px-16 lg:px-24 text-center pt-48">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact Star Alliance Aviation Academy
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Let’s connect! We’re here to answer your queries and guide you on your
          aviation journey.
        </p>
      </div>

      {/* Contact Info & Form Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24 py-20 bg-blue-600  relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/bg/starallianceaviationpilottraning.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black/50 "></div>
        {/* Contact Information */}
        <div className="space-y-10 relative">
          <h2 className="text-3xl font-bold text-yellow-500">Get in Touch</h2>
          <p className="text-white leading-relaxed text-lg">
            Reach out to us for admissions, pilot training details, or to visit
            our campus. Our team will be happy to assist you.
          </p>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/80 shadow-sm rounded-xl p-4 hover:shadow-md transition">
              <div className="flex items-center justify-center bg-blue-100 rounded-full w-12 h-12">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-gray-700 text-base">+91 9289595558</p>
              <p className="text-gray-700 text-base">011-45517009</p>
            </div>

            <div className="flex items-center gap-4 bg-white/80 shadow-sm rounded-xl p-4 hover:shadow-md transition">
              <div className="flex items-center justify-center bg-blue-100 rounded-full w-12 h-12">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-gray-700 text-base">
                info@starallianceaviation.com <br />
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/80 shadow-sm rounded-xl p-4 hover:shadow-md transition">
              <div className="flex items-center justify-center bg-blue-100 rounded-full w-12 h-12">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-gray-700 text-base">
                E-551, 2nd, 3rd, and 4th Floor, Ramphal Chowk, Dwarka Sector –
                7, Manyavar Showroom Building New Delhi-110075
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          {/* <div className="flex items-center gap-4 pt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-100 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-100 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-sky-100 rounded-full hover:bg-sky-500 hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-100 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-100 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div> */}
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-0 md:p-10">
          <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6 font-heading uppercase">
            Send Us a Message
          </h3>
          <ContactForm />
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-[400px]">
        <iframe
          title="Star Alliance Aviation Academy  Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.50706418344!2d77.0688984!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b3f40e6e7b%3A0x74c0a7c9e7d5c8f7!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691320928930!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-none md:rounded-xl border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
