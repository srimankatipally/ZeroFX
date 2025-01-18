const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Enter Amount",
      description: "Use our calculator to check the exchange rate and total amount your recipient will get"
    },
    {
      number: "2",
      title: "Add Recipient",
      description: "Enter your recipient's Indian bank account details securely"
    },
    {
      number: "3",
      title: "Send Money",
      description: "Pay securely using your preferred payment method and track your transfer"
    }
  ];

  return (
    <section id="howitworks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">How It Works</h2>
          <p className="text-lg text-neutral-600">Send money to India in three simple steps</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative animate__animated animate__fadeInLeft animate__delay-${index}s`}>
                <div className="bg-white p-8 rounded-lg text-center relative z-10">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeInUp">
          <div className="bg-neutral-50 inline-block px-6 py-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-700">Money typically arrives in 1-2 business days</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#waitlist" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg animate__animated animate__pulse animate__infinite">
            Start Your Transfer
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;