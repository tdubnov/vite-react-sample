import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="order-2 lg:order-1">
            <ContactInfo />
          </div>

          {/* Right Column - Contact Form */}
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 text-lg font-medium">
                Map Integration Area
              </p>
              <p className="text-gray-500 text-sm mt-2">
                123 Business Street, Suite 100, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Quick answers to questions you may have
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ❓ How quickly will I get a response?
            </h3>
            <p className="text-gray-600">
              We aim to respond to all inquiries within 24 hours during business days. Urgent matters are prioritized.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🌍 Do you operate internationally?
            </h3>
            <p className="text-gray-600">
              Yes! We work with clients around the globe and are available across multiple time zones.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              💬 What's the best way to contact you?
            </h3>
            <p className="text-gray-600">
              For general inquiries, email is best. For urgent matters, please call us directly during business hours.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🤝 Can I schedule a meeting?
            </h3>
            <p className="text-gray-600">
              Absolutely! Mention your preferred meeting time in the message, and we'll coordinate with you.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Let's build something amazing together.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
