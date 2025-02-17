"use client"; // Required for using React hooks (useState)

import { useState } from "react";
import data from "@/data/projects.json";
import { projectSchema } from "@/lib/schemas";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/Button";

interface Props {
  limit?: number;
}

export default function Projects({ limit }: Props) {
  // Parse the projects data
  let projects = projectSchema.parse(data).projects;

  // State to manage the number of projects displayed
  const [displayLimit, setDisplayLimit] = useState(limit || projects.length);

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    // Increase the display limit by a fixed number (e.g., 2 more projects)
    setDisplayLimit((prevLimit) => prevLimit + 2);
  };

  // Slice the projects array based on the current display limit
  const displayedProjects = projects.slice(0, displayLimit);

  return (
    <section>
      {/* Grid layout for projects */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {displayedProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {/* "Load More" button (only shown if there are more projects to load) */}
      {displayLimit < projects.length && (
        <div className="mt-8 flex justify-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </section>
  );
}