import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Ticket {
  id: number;
  subject: string;
  status: 'open' | 'in-progress' | 'resolved';
  date: string;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

function SupportPage() {
  const [activeTab, setActiveTab] = useState<string>('faq');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'agent', timestamp: '10:00 AM' }
  ]);
  const [chatInput, setChatInput] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [tickets] = useState<Ticket[]>([
    { id: 1, subject: 'Login Issue', status: 'resolved', date: '2024-01-15' },
    { id: 2, subject: 'Payment Problem', status: 'in-progress', date: '2024-01-18' },
    { id: 3, subject: 'Feature Request', status: 'open', date: '2024-01-20' }
  ]);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page. Enter your email address and follow the instructions sent to your inbox.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway.'
    },
    {
      id: 3,
      question: 'How can I cancel my subscription?',
      answer: 'You can cancel your subscription at any time from your account settings. Go to Settings > Subscription > Cancel Subscription. Your access will continue until the end of your billing period.'
    },
    {
      id: 4,
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with our service, contact our support team within 30 days of purchase for a full refund.'
    },
    {
      id: 5,
      question: 'How do I contact customer support?',
      answer: 'You can reach us through live chat, email at support@example.com, or by submitting a support ticket through this page. Our team is available 24/7 to assist you.'
    },
    {
      id: 6,
      question: 'What are your business hours?',
      answer: 'Our support team is available 24/7. However, phone support is available Monday-Friday, 9 AM - 6 PM EST. Live chat and email support are available at all times.'
    }
  ];

  const handleToggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const newMessage: ChatMessage = {
        id: chatMessages.length + 1,
        text: chatInput,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatInput('');

      setTimeout(() => {
        const agentResponse: ChatMessage = {
          id: chatMessages.length + 2,
          text: 'Thank you for your message! Our team will respond shortly.',
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="support__container min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6">
      
      {/* Header Section */}
      <div className="support__header text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Support Center</h1>
        <p className="text-xl text-gray-600 mb-8">How can we help you today?</p>
        
        {/* Search Bar */}
        <div className="support__search max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="support__stats grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-6xl mx-auto">
        <div className="stat__card bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">Support Available</div>
        </div>
        <div className="stat__card bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
          <div className="text-gray-600">Satisfaction Rate</div>
        </div>
        <div className="stat__card bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <div className="text-4xl font-bold text-purple-600 mb-2">&lt;2hrs</div>
          <div className="text-gray-600">Avg Response Time</div>
        </div>
        <div className="stat__card bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
          <div className="text-gray-600">Articles</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="support__tabs max-w-6xl mx-auto mb-8">
        <div className="tabs__navigation flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => handleTabChange('faq')}
            className={`tab__button px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => handleTabChange('contact')}
            className={`tab__button px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'contact'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Contact Form
          </button>
          <button
            onClick={() => handleTabChange('chat')}
            className={`tab__button px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'chat'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Live Chat
          </button>
          <button
            onClick={() => handleTabChange('tickets')}
            className={`tab__button px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'tickets'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            My Tickets
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="support__content max-w-6xl mx-auto">
        
        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="faq__section bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="faq__list space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <div key={faq.id} className="faq__item border-b border-gray-200 pb-4">
                    <button
                      onClick={() => handleToggleFAQ(faq.id)}
                      className="faq__question w-full text-left flex justify-between items-center py-3 hover:text-blue-600 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                      <span className="text-2xl text-gray-500">
                        {expandedFAQ === faq.id ? '−' : '+'}
                      </span>
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="faq__answer mt-3 text-gray-600 pl-4 border-l-4 border-blue-500">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No results found for your search.</p>
              )}
            </div>
          </div>
        )}

        {/* Contact Form Tab */}
        {activeTab === 'contact' && (
          <div className="contact__section bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="contact__form space-y-6">
              <div className="form__group">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div className="form__group">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form__group">
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <div className="form__group">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Submit Message
              </button>
            </form>
          </div>
        )}

        {/* Live Chat Tab */}
        {activeTab === 'chat' && (
          <div className="chat__section bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Live Chat Support</h2>
            <div className="chat__container border border-gray-300 rounded-lg overflow-hidden">
              <div className="chat__messages bg-gray-50 p-4 h-96 overflow-y-auto space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`chat__message flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`message__bubble max-w-xs p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      <p className="message__text">{message.text}</p>
                      <p className="message__timestamp text-xs mt-1 opacity-70">
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chat__input flex border-t border-gray-300">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-4 focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* My Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="tickets__section bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Support Tickets</h2>
            <div className="tickets__list space-y-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="ticket__item border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="ticket__info">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        #{ticket.id} - {ticket.subject}
                      </h3>
                      <p className="text-gray-600">Opened on: {ticket.date}</p>
                    </div>
                    <span
                      className={`ticket__status px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {ticket.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Create New Ticket
            </button>
          </div>
        )}
      </div>

      {/* Footer Contact Info */}
      <div className="support__footer max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="footer__card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-4xl mb-3">📧</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
          <p className="text-gray-600">support@example.com</p>
          <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
        </div>
        <div className="footer__card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-4xl mb-3">📞</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
          <p className="text-gray-600">1-800-SUPPORT</p>
          <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9 AM - 6 PM EST</p>
        </div>
        <div className="footer__card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Live Chat</h3>
          <p className="text-gray-600">Available 24/7</p>
          <p className="text-sm text-gray-500 mt-2">Instant support anytime</p>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
