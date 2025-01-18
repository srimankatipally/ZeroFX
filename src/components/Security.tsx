const Security = () => {
  const features = [
    {
      title: "256-bit Encryption",
      description: "All transactions are protected with bank-level SSL encryption",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      )
    },
    {
      title: "Secure Authentication",
      description: "Two-factor authentication and biometric login support",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      )
    },
    {
      title: "Regulatory Compliance",
      description: "Licensed and regulated money transfer service",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    }
  ];

  const certifications = ["PCI DSS Compliant", "SOC 2 Certified", "ISO 27001"];

  return (
    <section id="security" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bank-Grade Security</h2>
          <p className="text-lg text-gray-300">Your money and data are protected by industry-leading security measures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-neutral-800 rounded-xl p-8 text-center animate__animated animate__fadeInUp animate__delay-${index}s`}>
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold text-white mb-4">Our Security Certifications</h3>
              <p className="text-gray-300">We maintain the highest security standards in the industry</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-neutral-700 px-4 py-2 rounded-lg">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;