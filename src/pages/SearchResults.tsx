
import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto mt-20">
          <h1 className="text-3xl font-bold mb-6">Search Results for: {query}</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">
              We're currently updating our services database. Please contact us for assistance.
            </p>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                Our team is ready to help you find the right legal service for your needs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
