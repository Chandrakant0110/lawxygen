
import React from "react";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, setView }) => {
  return (
    <div className="hidden md:flex border rounded-md overflow-hidden border-slate-200">
      <Button 
        variant="ghost" 
        className={`rounded-none px-3 ${view === "grid" ? "bg-indigo-50 text-indigo-700" : "text-slate-600"}`}
        onClick={() => setView("grid")}
      >
        <Grid className="w-4 h-4" />
      </Button>
      <Button 
        variant="ghost" 
        className={`rounded-none px-3 ${view === "list" ? "bg-indigo-50 text-indigo-700" : "text-slate-600"}`}
        onClick={() => setView("list")}
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;
