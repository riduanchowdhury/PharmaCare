import React from 'react';
export const HeroSection = () => {
  return <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Trusted Pharmacy,
            <br />
            <span className="text-blue-600">Delivered to Your Door</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Shop medications and wellness products with ease. Professional care
            with the convenience of home delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Shop Now
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Consult a Pharmacist
            </button>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <p className="ml-4 text-gray-600">
              Trusted by <span className="font-semibold">10,000+</span> happy
              customers
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <div className="relative">
            <div className="bg-white p-2 rounded-xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Pharmacist helping customer" className="w-full h-auto rounded-lg" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">Free Delivery</p>
                  <p className="text-gray-500 text-sm">On orders over $50</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">Quick Service</p>
                  <p className="text-gray-500 text-sm">24hr turnaround</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};