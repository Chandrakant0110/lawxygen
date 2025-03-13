
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Legal Contracts for Small Businesses",
      excerpt: "Learn the essential elements of legal contracts that every small business owner should know to protect their interests.",
      author: "Jane Smith",
      date: "May 15, 2023",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Tax Planning Strategies for Freelancers and Independent Contractors",
      excerpt: "Discover effective tax planning strategies specifically designed for freelancers to maximize deductions and minimize tax liability.",
      author: "Michael Johnson",
      date: "April 22, 2023",
      category: "Tax",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How to Register a Trademark for Your Brand",
      excerpt: "A step-by-step guide to registering a trademark, including preparation, filing process, and what to expect during trademark examination.",
      author: "Sarah Williams",
      date: "March 10, 2023",
      category: "Trademark",
      image: "https://images.unsplash.com/photo-1551504734-a2c43a99e898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Navigating Compliance Regulations for E-commerce Businesses",
      excerpt: "An overview of compliance requirements for online retailers, including privacy policies, terms of service, and consumer protection laws.",
      author: "David Chen",
      date: "February 28, 2023",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1629654757057-23be0868a656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Essential Financial Statements for Business Growth",
      excerpt: "Learn about the critical financial statements that help track your business performance and make informed decisions for sustainable growth.",
      author: "Amanda Lee",
      date: "January 15, 2023",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "The Complete Guide to Startup Incorporation",
      excerpt: "Everything you need to know about incorporating your startup, from choosing the right business structure to filing the necessary paperwork.",
      author: "Robert Taylor",
      date: "December 5, 2022",
      category: "Startup",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Legal", "Tax", "Trademark", "Compliance", "Finance", "Startup", "Marketing"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lawblue-950 to-lawpurple-900 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Lawxygen Blog</h1>
              <p className="text-xl text-gray-200">
                Insights, tips, and expert advice on legal, financial, and business matters
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0 
                      ? 'bg-lawpurple-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-colors`}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-lawpurple-100 text-lawpurple-800 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      <a href="#" className="hover:text-lawblue-600 transition-colors">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">By {post.author}</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-1">
                <a href="#" className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="px-4 py-2 text-white bg-lawpurple-600 border border-lawpurple-600 rounded-md hover:bg-lawpurple-700">
                  1
                </a>
                <a href="#" className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-lawblue-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay up to date with the latest articles, news, and insights from our experts
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lawpurple-500"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-lawpurple-600 text-white font-medium rounded-md hover:bg-lawpurple-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
