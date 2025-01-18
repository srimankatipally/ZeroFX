import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to transfer money to India?",
      answer: "Typically, transfers are completed within 1-2 business days. Once processed, the money is directly deposited into the recipient's Indian bank account."
    },
    {
      question: "What documents do I need to send money?",
      answer: "You'll need a valid government-issued ID, proof of address, and the recipient's bank account details in India. We comply with all regulatory requirements for secure transfers."
    },
    {
      question: "How is the exchange rate calculated?",
      answer: "We offer real-time exchange rates with zero markup. The rate you see is exactly what you get, plus our transparent fixed fee and GST."
    },
    {
      question: "Is my money transfer secure?",
      answer: "Yes, we use bank-grade encryption and security measures. We're fully licensed and compliant with all US and Indian regulatory requirements for money transfers."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600">Everything you need to know about our remittance service</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item bg-neutral-50 rounded-lg animate__animated animate__fadeInUp">
              <button
                className="w-full flex justify-between items-center p-6 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-neutral-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-neutral-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;