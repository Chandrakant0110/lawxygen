
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfessionalCard from "@/components/ui/ProfessionalCard";

// Mock data for professionals
const professionals = [
  {
    id: "prof1",
    name: "Jessica Reynolds",
    title: "Corporate Lawyer • 7 yrs exp",
    rating: 4.9,
    reviews: 142,
    hourlyRate: 120,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    specialties: ["Contract Law", "Corporate Law", "Business Formation"],
    isTopRated: true,
    category: "corporate"
  },
  {
    id: "prof2",
    name: "Marcus Chen",
    title: "Intellectual Property Attorney • 5 yrs exp",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 95,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    specialties: ["Patent Law", "Copyright", "Trademark Registration"],
    isTopRated: true,
    category: "ip"
  },
  {
    id: "prof3",
    name: "Sophia Patel",
    title: "Family Law Attorney • 9 yrs exp",
    rating: 4.7,
    reviews: 113,
    hourlyRate: 85,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    specialties: ["Divorce", "Child Custody", "Family Mediation"],
    category: "family"
  },
  {
    id: "prof4",
    name: "Daniel Wilson",
    title: "Real Estate Attorney • 6 yrs exp",
    rating: 4.6,
    reviews: 78,
    hourlyRate: 110,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    specialties: ["Property Law", "Lease Agreements", "Real Estate Transactions"],
    category: "realestate"
  },
  {
    id: "prof5",
    name: "Aisha Johnson",
    title: "Immigration Attorney • 8 yrs exp",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 100,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    specialties: ["Visa Applications", "Green Cards", "Citizenship"],
    isTopRated: true,
    category: "immigration"
  },
  {
    id: "prof6",
    name: "Robert Garcia",
    title: "Criminal Defense Attorney • 12 yrs exp",
    rating: 4.8,
    reviews: 201,
    hourlyRate: 150,
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    specialties: ["Criminal Defense", "DUI", "White Collar Crime"],
    category: "criminal"
  },
  {
    id: "prof7",
    name: "Emily Zhang",
    title: "Tax Attorney • 6 yrs exp",
    rating: 4.7,
    reviews: 91,
    hourlyRate: 125,
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    specialties: ["Tax Planning", "IRS Disputes", "Business Taxation"],
    category: "tax"
  },
  {
    id: "prof8",
    name: "James Washington",
    title: "Employment Attorney • 9 yrs exp",
    rating: 4.8,
    reviews: 118,
    hourlyRate: 115,
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    specialties: ["Workplace Discrimination", "Wrongful Termination", "Employment Contracts"],
    isTopRated: true,
    category: "employment"
  },
];

const MemoizedProfessionalCard = React.memo(ProfessionalCard);

const FeaturedProfessionals = () => {
  const [category, setCategory] = useState("all");

  // Use useMemo to prevent unnecessary re-filtering
  const filteredProfessionals = useMemo(() => {
    return category === "all" 
      ? professionals.slice(0, 4) 
      : professionals.filter(prof => prof.category === category).slice(0, 4);
  }, [category]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured Legal Professionals</h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with our top-rated legal experts specialized in different areas of law
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setCategory}>
          <div className="flex justify-center">
            <TabsList className="bg-white">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="ip">Intellectual Property</TabsTrigger>
              <TabsTrigger value="family">Family Law</TabsTrigger>
              <TabsTrigger value="realestate">Real Estate</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProfessionals.map((professional) => (
                <MemoizedProfessionalCard key={professional.id} {...professional} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProfessionals.map((professional) => (
                <MemoizedProfessionalCard key={professional.id} {...professional} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ip" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProfessionals.map((professional) => (
                <MemoizedProfessionalCard key={professional.id} {...professional} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="family" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProfessionals.map((professional) => (
                <MemoizedProfessionalCard key={professional.id} {...professional} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="realestate" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProfessionals.map((professional) => (
                <MemoizedProfessionalCard key={professional.id} {...professional} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" className="border-lawblue-200 text-lawblue-950 hover:bg-lawblue-50">
            <Link to="/search-results">View All Professionals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;
