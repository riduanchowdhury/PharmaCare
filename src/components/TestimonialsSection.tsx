import React from 'react';
const testimonials = [{
  id: 1,
  quote: 'PharmaCare delivered my medications in 24 hours! Their service is exceptional and the pharmacist was very helpful with my questions.',
  name: 'Jane D.',
  role: 'Regular Customer',
  image: 'https://randomuser.me/api/portraits/women/44.jpg'
}, {
  id: 2,
  quote: "I've been using PharmaCare for all my family's medications. Their online consultation saved us a trip to the doctor for minor issues.",
  name: 'Michael T.',
  role: 'Family Customer',
  image: 'https://randomuser.me/api/portraits/men/86.jpg'
}, {
  id: 3,
  quote: 'As someone with chronic conditions, having reliable medication delivery is crucial. PharmaCare never disappoints with their timely service.',
  name: 'Sarah L.',
  role: 'Loyal Customer',
  image: 'https://randomuser.me/api/portraits/women/22.jpg'
}];
const trustBadges = [{
  id: 1,
  name: 'Certified Pharmacy',
  icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
}, {
  id: 2,
  name: 'Secure Payments',
  icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
}, {
  id: 3,
  name: 'Free Shipping',
  icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
}, {
  id: 4,
  name: '24/7 Support',
  icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
}];
export const TestimonialsSection = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to
            say about their PharmaCare experience
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Why Choose PharmaCare?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map(badge => <div key={badge.id} className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  {badge.icon}
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {badge.name}
                </h4>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 rounded-xl p-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-xl">
                Our Impact
              </h4>
              <p className="text-gray-600">
                Making healthcare accessible to everyone
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <p className="text-gray-600">Prescriptions Filled</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};