
import { SearchCheck, FileSignature, MessageCircle, Award } from "lucide-react";

const steps = [
  {
    icon: SearchCheck,
    title: "Find the Perfect Match",
    description: "Browse through our vast directory of legal professionals and services to find the perfect match for your specific needs.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: FileSignature,
    title: "Define Your Requirements",
    description: "Clearly communicate your legal requirements, budget, and timeline to ensure you get exactly what you need.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MessageCircle,
    title: "Collaborate Seamlessly",
    description: "Use our integrated messaging system to communicate, share files, and work efficiently with your legal professional.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Award,
    title: "Get Quality Results",
    description: "Receive high-quality legal services from verified professionals, backed by our satisfaction guarantee.",
    color: "bg-violet-100 text-violet-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">How Lawxygen Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Simplifying the process of finding and working with legal professionals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="mt-4 mb-2 text-xl font-medium text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              
              <div className="mt-3 text-2xl font-bold text-indigo-600">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 mt-16 text-center bg-slate-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-gray-900">
            Ready to Get Started?
          </h3>
          <p className="mt-2 text-gray-600">
            Join thousands of satisfied clients who have found the perfect legal match on Lawxygen.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
            <a 
              href="/search-results" 
              className="px-6 py-3 font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Find a Professional
            </a>
            <a 
              href="/job-posting" 
              className="px-6 py-3 font-medium transition-colors border rounded-md bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50"
            >
              Post a Job
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
