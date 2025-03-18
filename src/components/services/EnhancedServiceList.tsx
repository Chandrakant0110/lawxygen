
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { serviceCategories } from '@/data/serviceCategories';
import { Input } from '@/components/ui/input';

const EnhancedServiceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Flatten all services for search functionality
  const allServices = serviceCategories.flatMap(category => 
    category.items.map(item => ({
      ...item,
      categoryTitle: category.title
    }))
  );

  // Filter services based on search term and selected category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = !searchTerm || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      service.categoryTitle === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of legal and compliance services to support
            businesses at every stage of their journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 h-12"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[180px]"
            >
              <option value="all">All Categories</option>
              {serviceCategories.map((category, index) => (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Link
                key={index}
                to={service.to}
                className="group p-6 border border-gray-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex flex-col h-full no-underline"
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.categoryTitle}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-indigo-600 text-sm font-medium">Learn more</span>
                  <ArrowRight size={16} className="text-indigo-600 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your search.</p>
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors no-underline"
          >
            Browse All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServiceList;
