
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { mockData } from '@/data/serviceCategories';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LeadCaptureForm from '@/components/forms/LeadCaptureForm';

const ServiceCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Find the category from our data
  const categoryData = mockData.categories.find(c => c.id === category);
  
  if (!categoryData) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-24">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/services" className="text-primary hover:underline">
            Browse all services
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="pt-24 pb-12 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className={`${categoryData.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl font-bold">{categoryData.name.charAt(0)}</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {categoryData.name}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Browse our complete range of {categoryData.name.toLowerCase()} services designed to help your business thrive.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.services.map((service, index) => {
              // Convert service name to URL path
              const serviceUrlPath = service
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '');
                
              return (
                <Link 
                  to={`/services/${serviceUrlPath}`} 
                  key={index}
                  className="group no-underline"
                >
                  <div className="border border-slate-200 rounded-lg p-6 h-full hover:border-primary hover:shadow-md transition-all duration-200">
                    <h3 className="text-xl font-medium text-slate-800 mb-3 group-hover:text-primary">
                      {service}
                    </h3>
                    <p className="text-slate-500 mb-4">
                      Complete assistance with {service.toLowerCase()} for your business needs.
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                      <span className="font-medium text-primary">Learn more</span>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Expert Assistance?</h2>
              <p className="text-lg text-slate-600">
                Our specialists are ready to help you navigate legal and compliance challenges with ease.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <LeadCaptureForm variant="inline" className="bg-transparent border-0 shadow-none p-0" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ServiceCategoryPage;
