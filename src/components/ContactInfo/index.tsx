interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

function ContactInfoItem({ icon, title, content, link }: ContactInfoItemProps) {
  const ItemContent = (
    <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-md">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block" target="_blank" rel="noopener noreferrer">
        {ItemContent}
      </a>
    );
  }

  return ItemContent;
}

function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you. Our team is always here to help and answer any questions you might have.
        </p>
      </div>

      <div className="space-y-4">
        <ContactInfoItem
          icon="📧"
          title="Email"
          content="contact@company.com"
          link="mailto:contact@company.com"
        />

        <ContactInfoItem
          icon="📱"
          title="Phone"
          content="+1 (555) 123-4567"
          link="tel:+15551234567"
        />

        <ContactInfoItem
          icon="📍"
          title="Office"
          content="123 Business Street, Suite 100, San Francisco, CA 94105"
        />

        <ContactInfoItem
          icon="🕐"
          title="Business Hours"
          content="Monday - Friday: 9:00 AM - 6:00 PM PST"
        />
      </div>

      {/* Social Media Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            📷
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            💼
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            💻
          </a>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Quick Response</h3>
        <p className="text-gray-700">
          We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
