
import { SearchCheck, FileSignature, MessageCircle, Award } from "lucide-react";

const steps = [
  {
    icon: SearchCheck,
    title: "Find the Perfect Match",
    description: "Browse through our vast directory of legal professionals and services to find the perfect match for your specific needs.",
    color: "bg-blue-100 text-blue-600",
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
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: "Get Quality Results",
    description: "Receive high-quality legal services from verified professionals, backed by our satisfaction guarantee.",
    color: "bg-amber-100 text-amber-600",
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
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              
              <div className="relative mt-4 mb-6 h-0.5 w-24 bg-gray-200 md:hidden">
                <div className="absolute -right-4 -top-2 text-xl font-bold text-gray-400">→</div>
              </div>
              
              <h3 className="mb-2 text-xl font-medium text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              
              <div className="mt-3 text-2xl font-bold text-lawpurple-600">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block relative mt-10">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          <div className="absolute left-1/4 top-1/2 h-0.5 w-3/4 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          <div className="absolute inset-0 flex justify-between items-center">
            <div className="w-6 h-6 bg-white z-10"></div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="w-6 h-6 bg-white z-10"></div>
          </div>
        </div>

        <div className="p-6 mt-16 text-center bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-900">
            Ready to Get Started?
          </h3>
          <p className="mt-2 text-gray-600">
            Join thousands of satisfied clients who have found the perfect legal match on Lawxygen.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
            <a 
              href="/search-results" 
              className="px-6 py-3 font-medium text-white rounded-md bg-lawpurple-600 hover:bg-lawpurple-700"
            >
              Find a Professional
            </a>
            <a 
              href="/job-posting" 
              className="px-6 py-3 font-medium transition-colors border rounded-md text-lawblue-950 border-lawblue-200 hover:bg-lawblue-50"
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
