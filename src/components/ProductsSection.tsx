import React from 'react';
const productCategories = [{
  id: 1,
  name: 'Prescription Medications',
  description: 'Quality prescription drugs with professional guidance',
  image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  discount: null
}, {
  id: 2,
  name: 'Over-the-Counter Drugs',
  description: 'Remedies for common ailments without prescription',
  image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  discount: '15% OFF'
}, {
  id: 3,
  name: 'Vitamins & Supplements',
  description: 'Boost your health with quality supplements',
  image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  discount: '20% OFF'
}, {
  id: 4,
  name: 'Personal Care',
  description: 'Premium products for your personal hygiene',
  image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  discount: null
}];
export const ProductsSection = () => {
  return <section id="products" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of healthcare products, from prescription
            medications to wellness essentials
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map(category => <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                {category.discount && <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {category.discount}
                  </div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
                  Shop Now
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-2 text-gray-700">
                <span className="font-semibold">New customers get 20% off</span>{' '}
                their first order with code:{' '}
                <span className="font-semibold">WELCOME20</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};