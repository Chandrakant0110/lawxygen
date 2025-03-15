
import React from "react";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, setView }) => {
  return (
    <div className="hidden md:flex border rounded-md overflow-hidden">
      <Button 
        variant="ghost" 
        className={`rounded-none px-3 ${view === "grid" ? "bg-muted" : ""}`}
        onClick={() => setView("grid")}
      >
        <Grid className="w-4 h-4" />
      </Button>
      <Button 
        variant="ghost" 
        className={`rounded-none px-3 ${view === "list" ? "bg-muted" : ""}`}
        onClick={() => setView("list")}
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;
