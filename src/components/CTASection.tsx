import React from 'react';
export const CTASection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join PharmaCare Rewards
              </h2>
              <p className="text-blue-100 mb-6">
                Sign up for our rewards program and get exclusive discounts,
                early access to promotions, and personalized health tips
                delivered straight to your inbox.
              </p>
              <div className="bg-white p-1 rounded-md flex flex-col sm:flex-row mb-4">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 outline-none text-gray-700 bg-transparent" />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors mt-2 sm:mt-0">
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-100 text-sm">
                Get 10% off your first purchase when you join!
                <br />
                By subscribing, you agree to our{' '}
                <a href="#" className="underline">
                  Terms & Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="md:w-1/2 bg-blue-700 flex items-center justify-center p-8 md:p-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    PharmaCare Benefits
                  </h3>
                  <ul className="text-blue-100 space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Exclusive Discounts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free Delivery
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Early Access to Sales
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized Health Tips
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};