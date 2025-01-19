// import { useState } from 'react';
// import { useData } from '../context/USDdata';


// const Calculator = () => {
//   const [amount, setAmount] = useState<string>('');
//   //const exchangeRate = 82.45;
//   const { exchangeRate, isLoading, error } = useData();
//   const fixedFee = 10;
//   const gstRate = 0.18;

//   const calculateAmounts = () => {
//     const usdAmount = parseFloat(amount) || 0;
//     const gstAmount = fixedFee * gstRate;
//     const totalFees = fixedFee + gstAmount;
//     const inrAmount = (usdAmount - totalFees) * exchangeRate;

//     return {
//       transferAmount: usdAmount.toFixed(2),
//       gstAmount: gstAmount.toFixed(2),
//       inrAmount: Math.max(0, inrAmount).toFixed(2)
//     };
//   };

//   const amounts = calculateAmounts();

//   // return (
//   //   <section id="calculator" className="py-20 bg-white">
//   //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//   //       <div className="text-center mb-12 animate__animated animate__fadeInUp">
//   //         <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Calculate Your Transfer</h2>
//   //         <p className="text-lg text-neutral-600">See exactly how much your recipient will get in INR</p>
//   //       </div>

//   //       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 animate__animated animate__fadeInUp">
//   //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//   //           {/* Input Section */}
//   //           <div className="space-y-6">
//   //             <div>
//   //               <label className="block text-sm font-medium text-neutral-700 mb-2">You Send (USD)</label>
//   //               <div className="relative">
//   //                 <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">$</span>
//   //                 <input
//   //                   type="number"
//   //                   value={amount}
//   //                   onChange={(e) => setAmount(e.target.value)}
//   //                   className="block w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//   //                   placeholder="Enter amount"
//   //                 />
//   //               </div>
//   //             </div>

//   //             <div className="bg-neutral-50 p-4 rounded-lg">
//   //               <p className="text-sm text-neutral-600 mb-2">Current Exchange Rate</p>
//   //               <p className="text-lg font-semibold text-neutral-900">1 USD = {exchangeRate} INR</p>
//   //             </div>
//   //           </div>

//   //           {/* Breakdown Section */}
//   //           <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
//   //             <h3 className="font-semibold text-lg text-neutral-900 mb-4">Transaction Breakdown</h3>
              
//   //             <div className="flex justify-between text-neutral-600">
//   //               <span>Transfer Amount</span>
//   //               <span>${amounts.transferAmount}</span>
//   //             </div>

//   //             <div className="flex justify-between text-neutral-600">
//   //               <span>Fixed Fee</span>
//   //               <span>${fixedFee.toFixed(2)}</span>
//   //             </div>

//   //             <div className="flex justify-between text-neutral-600">
//   //               <span>GST (18% on fee)</span>
//   //               <span>${amounts.gstAmount}</span>
//   //             </div>

//   //             <div className="border-t border-neutral-300 pt-4 mt-4">
//   //               <div className="flex justify-between font-semibold text-lg text-neutral-900">
//   //                 <span>Recipient Gets</span>
//   //                 <span>₹{amounts.inrAmount}</span>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>

//   //         <div className="mt-8 text-center">
//   //           <a href="#waitlist" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
//   //             Start Transfer Now
//   //           </a>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </section>
//   // );
//   return (
//     <section id="calculator" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 animate__animated animate__fadeInUp">
//           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Calculate Your Transfer</h2>
//           <p className="text-lg text-neutral-600">See exactly how much your recipient will get in INR</p>
//         </div>
  
//         <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 animate__animated animate__fadeInUp">
//           {isLoading ? (
//             <p className="text-center text-neutral-600">Loading exchange rate...</p>
//           ) : error ? (
//             <p className="text-center text-red-600">{error}</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Input Section */}
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-neutral-700 mb-2">You Send (USD)</label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">$</span>
//                     <input
//                       type="number"
//                       value={amount}
//                       onChange={(e) => setAmount(e.target.value)}
//                       className="block w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Enter amount"
//                     />
//                   </div>
//                 </div>
  
//                 <div className="bg-neutral-50 p-4 rounded-lg">
//                   <p className="text-sm text-neutral-600 mb-2">Current Exchange Rate</p>
//                   <p className="text-lg font-semibold text-neutral-900">1 USD = {exchangeRate} INR</p>
//                 </div>
//               </div>
  
//               {/* Breakdown Section */}
//               <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
//                 <h3 className="font-semibold text-lg text-neutral-900 mb-4">Transaction Breakdown</h3>
  
//                 <div className="flex justify-between text-neutral-600">
//                   <span>Transfer Amount</span>
//                   <span>${amounts.transferAmount}</span>
//                 </div>
  
//                 <div className="flex justify-between text-neutral-600">
//                   <span>Fixed Fee</span>
//                   <span>${fixedFee.toFixed(2)}</span>
//                 </div>
  
//                 <div className="flex justify-between text-neutral-600">
//                   <span>GST (18% on fee)</span>
//                   <span>${amounts.gstAmount}</span>
//                 </div>
  
//                 <div className="border-t border-neutral-300 pt-4 mt-4">
//                   <div className="flex justify-between font-semibold text-lg text-neutral-900">
//                     <span>Recipient Gets</span>
//                     <span>₹{amounts.inrAmount}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
  
// };

// export default Calculator;
// import { useState } from 'react';
// import { useData } from '../context/USDdata';

// const Calculator = () => {
//   const [amount, setAmount] = useState<string>('');
//   const { exchangeRate, isLoading, error } = useData();
//   const fixedFee = 10;

//   const calculateAmounts = () => {
//     const usdAmount = parseFloat(amount) || 0;
//     const totalFees = fixedFee; // No GST included
//     const inrAmount = (usdAmount - totalFees) * exchangeRate;

//     return {
//       transferAmount: usdAmount.toFixed(2),
//       inrAmount: Math.max(0, inrAmount).toFixed(2),
//     };
//   };

//   const amounts = calculateAmounts();

//   return (
//     <section id="calculator" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 animate__animated animate__fadeInUp">
//           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Calculate Your Transfer</h2>
//           <p className="text-lg text-neutral-600">See exactly how much your recipient will get in INR</p>
//         </div>

//         <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 animate__animated animate__fadeInUp">
//           {isLoading ? (
//             <p className="text-center text-neutral-600">Loading exchange rate...</p>
//           ) : error ? (
//             <p className="text-center text-red-600">{error}</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Input Section */}
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-neutral-700 mb-2">You Send (USD)</label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">$</span>
//                     <input
//                       type="number"
//                       value={amount}
//                       onChange={(e) => setAmount(e.target.value)}
//                       className="block w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Enter amount"
//                     />
//                   </div>
//                 </div>

//                 <div className="bg-neutral-50 p-4 rounded-lg">
//                   <p className="text-sm text-neutral-600 mb-2">Current Exchange Rate</p>
//                   <p className="text-lg font-semibold text-neutral-900">1 USD = {exchangeRate} INR</p>
//                 </div>
//               </div>

//               {/* Breakdown Section */}
//               <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
//                 <h3 className="font-semibold text-lg text-neutral-900 mb-4">Transaction Breakdown</h3>

//                 <div className="flex justify-between text-neutral-600">
//                   <span>Transfer Amount</span>
//                   <span>${amounts.transferAmount}</span>
//                 </div>

//                 <div className="flex justify-between text-neutral-600">
//                   <span>Fixed Fee</span>
//                   <span>${fixedFee.toFixed(2)}</span>
//                 </div>

//                 <div className="border-t border-neutral-300 pt-4 mt-4">
//                   <div className="flex justify-between font-semibold text-lg text-neutral-900">
//                     <span>Recipient Gets</span>
//                     <span>₹{amounts.inrAmount}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="mt-8 text-center">
//             <a
//               href="#waitlist"
//               className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
//             >
//               Start Transfer Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Calculator;
import { useState } from 'react';
import { useData } from '../context/USDdata';

const Calculator = () => {
  const [amount, setAmount] = useState<string>('');
  const { exchangeRate, isLoading, error } = useData();
  const fixedFee = 4.99;

  const calculateAmounts = () => {
    const usdAmount = parseFloat(amount) || 0;
    const totalFees = fixedFee; // No GST included
    const inrAmount = (usdAmount - totalFees) * exchangeRate;

    return {
      transferAmount: usdAmount.toFixed(2),
      inrAmount: Math.max(0, inrAmount).toFixed(2), // Ensure INR is always shown with 2 decimals
    };
  };

  const amounts = calculateAmounts();

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Calculate Your Transfer</h2>
          <p className="text-lg text-neutral-600">See exactly how much your recipient will get in INR</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 animate__animated animate__fadeInUp">
          {isLoading ? (
            <p className="text-center text-neutral-600">Loading exchange rate...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">You Send (USD)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="block w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-sm text-neutral-600 mb-2">Current Exchange Rate</p>
                  <p className="text-lg font-semibold text-neutral-900">1 USD = {exchangeRate} INR</p>
                </div>
              </div>

              {/* Breakdown Section */}
              <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg text-neutral-900 mb-4">Transaction Breakdown</h3>

                <div className="flex justify-between text-neutral-600">
                  <span>Transfer Amount</span>
                  <span>${amounts.transferAmount}</span>
                </div>

                <div className="flex justify-between text-neutral-600">
                  <span>Fixed Fee</span>
                  <span>${fixedFee.toFixed(2)}</span>
                </div>

                <div className="border-t border-neutral-300 pt-4 mt-4">
                  <div className="flex justify-between font-semibold text-lg text-neutral-900">
                    <span>Recipient Gets</span>
                    <span>₹{amounts.inrAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <a
              href="#waitlist"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Start Transfer Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
