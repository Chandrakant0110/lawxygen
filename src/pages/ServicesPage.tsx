
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Legal Services</h1>
          <p className="text-xl text-gray-600 mb-10">
            We offer a comprehensive range of legal services to meet your business and personal needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8 text-left">
              <h3 className="text-2xl font-semibold mb-4">Business Services</h3>
              <p className="text-gray-600 mb-6">
                From company registration to tax compliance, we provide all the services your business needs.
              </p>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-left">
              <h3 className="text-2xl font-semibold mb-4">Individual Services</h3>
              <p className="text-gray-600 mb-6">
                Legal support for personal matters including property, taxation, and documentation.
              </p>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Need Personalized Assistance?</h2>
            <Button asChild size="lg" className="px-8 py-6">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
