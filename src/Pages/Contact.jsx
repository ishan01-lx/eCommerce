import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";
import { Link } from "react-router";

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiLocationMarker className="h-6 w-6 text-white" />,
      title: "Address",
      details: ["123 Buddha Road", "Bhagwan Pau, Kathmandu"],
    },
    {
      icon: <HiPhone className="h-6 w-6 text-white" />,
      title: "Phone",
      details: ["+977 9861804767", "Sun - Fri, 9AM - 6PM"],
    },
    {
      icon: <HiMail className="h-6 w-6 text-white" />,
      title: "Email",
      details: ["support@shoppie.com", "We'll respond within 24 hours"],
    },
    {
      icon: <HiClock className="h-6 w-6 text-white" />,
      title: "Business Hours",
      details: ["Sunday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      <main className="container mx-auto px-6 py-12">
        <Link
          to="/"
          className="block text-md text-gray-400 mb-6 cursor-pointer hover:text-gray-200 md:hidden"
        >
          ← Back to Home
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our products or need assistance? We're here to
            help you find the perfect tech solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-950 rounded-2xl shadow-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-gray-300">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Ishan"
                    className="w-full mt-1 p-3 border border-gray-800 bg-gray-950 text-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Sitaula"
                    className="w-full mt-1 p-3 border border-gray-800 bg-gray-950 text-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ishan@example.com"
                  className="w-full mt-1 p-3 border border-gray-800 bg-gray-950 text-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full mt-1 p-3 border border-gray-800 bg-gray-950 text-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  className="w-full mt-1 p-3 border border-gray-800 bg-gray-950 text-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl shadow-md p-6 border border-gray-800 text-gray-300 "
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-950 rounded-2xl shadow-md p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-300">
                What's your return policy?
              </h3>
              <p className="text-gray-500">
                We offer a 30-day return policy for all products in original
                condition. Free return shipping is included.
              </p>
            </div>
            <div className="bg-gray-950 rounded-2xl shadow-md p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-300">
                Do you offer international shipping?
              </h3>
              <p className="text-gray-500">
                Yes, we ship worldwide. International shipping costs and
                delivery times vary by location.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
