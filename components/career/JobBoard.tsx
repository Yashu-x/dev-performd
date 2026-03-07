import React, { useState } from "react";
import JobCard from "./JobCardProps";

interface Job {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  salary: string;
  tags: string[];
}

const JobBoard: React.FC = () => {
  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Customer Service",
    "Finance",
    "Management",
    "Operations",
  ];

  const jobs: Job[] = [
    {
      id: 1,
      title: "UI/UX Product Designer",
      category: "Design",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
      location: "Nugegoda",
      salary: "28k - 36k",
      tags: [],
    },
    {
      id: 2,
      title: "Social Media Marketing",
      category: "Marketing",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
      location: "Nugegoda",
      salary: "28k - 36k",
      tags: ["100% Remote", "Full Time"],
    },
    {
      id: 3,
      title: "Web Developer",
      category: "Development",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
      location: "Nugegoda",
      salary: "28k - 36k",
      tags: ["100% Remote", "Full Time"],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("All");
  const filteredJobs =
    activeTab === "All" ? jobs : jobs.filter((job) => job.category === activeTab);

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-10">
      {/* Container */}
      <div className="w-full bg-white rounded-2xl shadow-sm p-4 sm:p-6">
        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-white border border-primary"
                        : "bg-white text-primary border border-primary hover:bg-primary/10"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-h-[300px] w-full transition-all duration-300">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="col-span-full flex justify-center items-center text-gray-500 text-sm h-[300px] w-full">
              No jobs available in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
