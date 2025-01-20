// const Hero = () => {
//   return (
//     <section id="hero" className="min-h-[70vh] bg-neutral-900 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
//           {/* Left Column */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate__animated animate__fadeInLeft">
//               Send Money from the USA to India with 
//               <span className="text-blue-500">Zero Forex Markup!</span>
//             </h1>
//             <p className="mt-6 text-xl text-gray-300 animate__animated animate__fadeInLeft animate__delay-1s">
//               Fixed Fee + Transparent GST Calculation
//             </p>
//             <div className="mt-8 flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
//               <a href="#calculator" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
//                 Calculate Rate
//               </a>
//               <a href="#waitlist" className="inline-flex justify-center items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-neutral-900 transition-colors duration-200 md:text-lg">
//                 Join Waitlist
//               </a>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex items-center justify-center animate__animated animate__fadeInRight">
//             <div className="bg-neutral-800 p-6 rounded-lg shadow-xl w-full max-w-md">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
//                     <span className="text-white text-xl font-bold">$</span>
//                   </div>
//                   <div className="mx-4 text-3xl text-white">→</div>
//                   <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
//                     <span className="text-white text-xl font-bold">₹</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex justify-between text-gray-300">
//                   <span>Exchange Rate:</span>
//                   <span className="text-white">1 USD = 82.45 INR</span>
//                 </div>
//                 <div className="flex justify-between text-gray-300">
//                   <span>Transfer Fee:</span>
//                   <span className="text-white">$10</span>
//                 </div>
//                 <div className="flex justify-between text-gray-300">
//                   <span>Transfer Time:</span>
//                   <span className="text-white">1-2 Business Days</span>
//                 </div>
//                 <div className="pt-4 border-t border-neutral-700">
//                   <a href="#calculator" className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
//                     Try Calculator
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { useData } from "../context/USDdata"; // Import the useData hook

const Hero = () => {
  const { exchangeRate, isLoading, error } = useData(); // Access exchange rate data

  return (
    <section id="hero" className="min-h-[70vh] bg-neutral-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate__animated animate__fadeInLeft">
              Send Money from the USA to India with
              <span className="text-blue-500"> Zero Forex Markup!</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 animate__animated animate__fadeInLeft animate__delay-1s">
              With Fixed Fee of 2.99$
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
              <a
                href="#calculator"
                className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Calculate Rate
              </a>
              <a
                href="#waitlist"
                className="inline-flex justify-center items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-neutral-900 transition-colors duration-200 md:text-lg"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 p-6 rounded-lg shadow-xl w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">$</span>
                  </div>
                  <div className="mx-4 text-3xl text-white">→</div>
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">₹</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {isLoading ? (
                  <p className="text-gray-300">Loading exchange rate...</p>
                ) : error ? (
                  <p className="text-red-500">Error: {error}</p>
                ) : (
                  <>
                    <div className="flex justify-between text-gray-300">
                      <span>Exchange Rate:</span>
                      <span className="text-white">1 USD = {exchangeRate.toFixed(2)} INR</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Transfer Fee:</span>
                      <span className="text-white">$2.99</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Transfer Time:</span>
                      <span className="text-white">1-2 Business Days</span>
                    </div>
                  </>
                )}
                <div className="pt-4 border-t border-neutral-700">
                  <a
                    href="#calculator"
                    className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Try Calculator
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
