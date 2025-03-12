import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaUserMd, FaBriefcase, FaClock } from 'react-icons/fa';
import PageHero from '../components/PageHero';

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const states = [
    {
      name: "California",
      path: "/locations/california",
      image: "https://images.pexels.com/photos/2709964/pexels-photo-2709964.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive medical director services across California."
    },
    {
      name: "Florida",
      path: "/locations/florida",
      image: "https://images.pexels.com/photos/4366062/pexels-photo-4366062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Expert medical oversight for Florida aesthetic practices."
    },
    {
      name: "Texas",
      path: "/locations/texas",
      image: "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Specialized medical director services throughout Texas."
    },
    {
      name: "Nevada",
      path: "/locations/nevada",
      image: "https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg",
      description: "Premier medical director services in Nevada."
    },
    {
      name: "New York",
      path: "/locations/new-york",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Comprehensive medical oversight in New York state."
    },
    {
      name: "Arizona",
      path: "/locations/arizona",
      image: "https://www.tripsavvy.com/thmb/BS2_bGMEJ7RZZQEFx5bCz3FByck=/2122x1413/filters:fill(auto,1)/GettyImages-1138165502-1daa3ff05ff54d2dadb274ae14.jpg",
      description: "Expert medical director services across Arizona."
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors & Job Opportunities Nationwide" 
        subtitle="Built for Healthcare Professionals, By Healthcare Professionals"
        backgroundImage="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475457-Los-Angeles.jpg"
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                By Healthcare Professionals, For Healthcare Professionals
              </h2>
              <p className="text-lg text-primary-dark/80 mb-6">
                Our team of nurses and physician assistants understands the needs of healthcare providers because we've lived it. We know the demands of the profession firsthand - the long hours, early mornings, and late nights.
              </p>
              <p className="text-lg text-primary-dark/80 mb-6">
                Based in Dallas, Texas (Central Time Zone), we provide seamless service nationwide. Whether you're on the East or West Coast, we're here when you need us.
              </p>
              <div className="mt-8 text-center">
                <Link to="/contact" className="bg-secondary hover:bg-secondary-dark text-white text-center py-3 px-6 rounded-lg transition-colors inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="bg-accent-sage rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                For NPs/PAs/RNs: Hire a Local Medical Director
              </h3>
              <p className="text-lg text-primary-dark/80 mb-6">
                Whether you're running a med spa, telehealth clinic, or weight-loss center, we connect you with qualified local medical directors who understand healthcare. Our network ensures your clinic gets the personalized oversight it needs.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4">
                  <FaUserMd className="text-secondary text-2xl" />
                  <span className="text-primary-dark">Expert Medical Oversight</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaBriefcase className="text-secondary text-2xl" />
                  <span className="text-primary-dark">Compliance Support</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock className="text-secondary text-2xl" />
                  <span className="text-primary-dark">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              EliteUSMD Medical Director Services
            </h2>
            <p className="text-xl text-primary-dark max-w-3xl mx-auto">
              Providing expert medical director services across six states, ensuring compliance, 
              safety, and quality care for aesthetic practices nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.map((state, index) => (
              <Link 
                to={state.path} 
                key={index} 
                className="group block bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative">
                  <img 
                    src={state.image} 
                    alt={`${state.name} Medical Practice`}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-secondary mr-2" />
                    <h2 className="text-2xl font-semibold text-primary-dark">
                      {state.name}
                    </h2>
                  </div>
                  <p className="text-primary-dark/70">
                    {state.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary hover:text-secondary-dark">
                    Learn More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              For MDs/DOs: Explore Medical Director Opportunities
            </h2>
            <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto">
              Discover rewarding medical director positions tailored for physicians
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-accent-sage rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Join Our Network of Medical Directors
              </h3>
              <p className="text-lg text-primary-dark/80 mb-6">
                As physicians who understand the demands of healthcare, we connect MDs and DOs with flexible, rewarding opportunities. Whether you're seeking regional medical director positions or local opportunities, our experienced team provides personalized support throughout your journey.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4">
                  <FaUserMd className="text-secondary text-2xl" />
                  <span className="text-primary-dark">Telemedicine Opportunities</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaBriefcase className="text-secondary text-2xl" />
                  <span className="text-primary-dark">Aesthetic Medicine</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock className="text-secondary text-2xl" />
                  <span className="text-primary-dark">Weight Management</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Nationwide Support & Flexibility
              </h3>
              <p className="text-lg text-primary-dark/80 mb-6">
                Our Dallas-based team of healthcare professionals understands your needs firsthand. We provide support during East Coast mornings and West Coast evenings, ensuring you get the guidance you need, regardless of your location.
              </p>
              <p className="text-lg text-primary-dark/80 mb-8">
                Explore our network of medical director positions in telemedicine, weight-loss management, aesthetics, and more. Take the next step in your career with opportunities that match your expertise and schedule.
              </p>
              <div className="text-center">
                <Link to="/contact" className="bg-secondary hover:bg-secondary-dark text-white text-center py-3 px-6 rounded-lg transition-colors inline-block">
                  View Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
