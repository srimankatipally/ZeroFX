const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-gray-300">Experience the best way to send money to India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit cards */}
          {[
            {
              title: "Zero Forex Markup",
              description: "Get the real exchange rate without any hidden markups. What you see is what you get.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
              delay: ""
            },
            {
              title: "Transparent Pricing",
              description: "Clear breakdown of fees and GST. No surprises, no hidden charges.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
              delay: "animate__delay-1s"
            },
            {
              title: "Fast & Reliable",
              description: "Quick transfers with real-time tracking. Your money reaches safely within 1-2 business days.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
              delay: "animate__delay-2s"
            }
          ].map((benefit, index) => (
            <div key={index} className={`bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp ${benefit.delay}`}>
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {benefit.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-4 bg-neutral-800 rounded-lg animate__animated animate__fadeInUp animate__delay-3s">
            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-300">Regulated and licensed money transfer service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;