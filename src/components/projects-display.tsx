"use client";

import { useState, useRef, useEffect } from "react";
import { FiExternalLink, FiFilter, FiInfo, FiX } from "react-icons/fi";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  techStack: readonly string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
  githubLink?: string;
  badges?: readonly string[];
  badgeIconTypes?: readonly string[];
};

type ProjectsDisplayProps = {
  projects: readonly Project[];
  personalProjects: readonly Project[];
};

export default function ProjectsDisplay({ projects, personalProjects }: ProjectsDisplayProps) {
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Get all unique tech stack items across all projects
  const allProjects = [...projects, ...personalProjects];
  const allTechStacks = allProjects.flatMap(project => project.techStack);
  const uniqueTechStacks = Array.from(new Set(allTechStacks)).sort();
  
  // Filter projects based on selected tech stacks
  const displayProjects = showPersonalProjects ? personalProjects : projects;
  const filteredProjects = selectedTechs.length > 0
    ? displayProjects.filter(project => 
        selectedTechs.every(tech => project.techStack.includes(tech))
      )
    : displayProjects;

  // Close filter dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle tech selection
  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  // Clear all selected techs
  const clearFilters = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">
            {showPersonalProjects ? "Personal Projects" : "Professional Projects"}
          </span>
          <button
            onClick={() => setShowPersonalProjects(!showPersonalProjects)}
            className="px-3 py-1 text-xs rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {showPersonalProjects ? "Show Professional" : "Show Personal"}
          </button>
        </div>
        
        {/* Filter by Tech - Only visible on sm screens and above */}
        <div className="relative hidden sm:block" ref={filterRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center px-3 py-1 text-xs rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <FiFilter className="mr-1.5" size={12} />
            {selectedTechs.length > 0 ? `Filters (${selectedTechs.length})` : "Filter by Tech"}
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50">
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">Select technologies</span>
                  {selectedTechs.length > 0 && (
                    <button 
                      onClick={clearFilters}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                
                {uniqueTechStacks.map(tech => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className="w-full flex items-center justify-between text-left px-2 py-1 text-xs rounded hover:bg-gray-800"
                  >
                    <span>{tech}</span>
                    {selectedTechs.includes(tech) && (
                      <span className="text-green-400">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedTechs.length > 0 && (
        <div className="hidden sm:flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-400">Filtered by:</span>
          {selectedTechs.map(tech => (
            <span 
              key={tech}
              className="flex items-center text-xs px-2 py-0.5 rounded bg-gray-800 text-white"
            >
              {tech}
              <button 
                onClick={() => toggleTech(tech)}
                className="ml-1.5 text-gray-400 hover:text-white"
              >
                <FiX size={12} />
              </button>
            </span>
          ))}
        </div>
      )}

      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pb-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => {
              // Determine if project has a link
              const hasLink = "link" in project && project.link?.href;
              const projectUrl = hasLink ? project.link?.href : "#";
              const isExpanded = expandedProject === project.title;

              // Create card content
              const cardContent = (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-medium text-white group-hover:text-gray-200 jakarta-sans flex items-center">
                      {project.title}
                      {project.badgeIconTypes?.includes("clock") && (
                        <div className="ml-1.5 text-amber-400 relative inline-block group/clock">
                          <ClockIcon className="w-3.5 h-3.5 cursor-pointer" />
                          <div className="fixed mt-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/clock:opacity-100 bg-black border border-gray-800 text-xs text-white px-2 py-1 rounded whitespace-nowrap z-[999] pointer-events-none transition-opacity duration-200">
                            In development
                          </div>
                        </div>
                      )}
                    </h3>
                    {project.badges && project.badges.length > 0 && (
                      <div className="flex gap-1">
                        {project.badges.map((badge, index) => {
                          const iconType = project.badgeIconTypes && project.badgeIconTypes[index];
                          return (
                            <span
                              key={badge}
                              className="flex items-center text-xs px-1.5 py-0.5 rounded bg-gray-800 text-amber-400"
                            >
                              {iconType === "clock" && <ClockIcon className="w-3 h-3 mr-1" />}
                              {badge}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <p className={`text-gray-400 text-[13px] mb-2 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className={`text-xs px-1.5 py-0.5 rounded transition-colors ${
                          selectedTechs.includes(tech) 
                            ? 'bg-gray-700 text-white' 
                            : 'bg-black text-gray-500 hover:bg-gray-800 hover:text-gray-300'
                        } ${!isMobile ? 'cursor-pointer' : ''}`}
                        onClick={(e) => {
                          // Only allow filtering on non-mobile screens
                          if (!isMobile) {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleTech(tech);
                          }
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <motion.div 
                  key={project.title} 
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <a 
                      href={projectUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block border border-gray-800 bg-gradient-to-b from-gray-800/20 to-gray-900/30 rounded-md p-3 hover:bg-gray-900/60 transition-all hover:border-gray-700 hover:translate-y-[-2px] hover:shadow-md ${isExpanded ? 'min-h-[155px]' : 'h-[155px]'} flex flex-col relative glass-shine-effect ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}
                      onClick={(e) => {
                        // If no link, prevent default behavior
                        if (!hasLink) {
                          e.preventDefault();
                          setExpandedProject(isExpanded ? null : project.title);
                          return;
                        }
                        
                        // Allow cmd/ctrl+click to open in new tab
                        if (e.metaKey || e.ctrlKey) return;
                        
                        // For normal clicks on the card, allow navigation to the link
                        // and toggle expanded state
                        setExpandedProject(isExpanded ? null : project.title);
                      }}
                    >
                      <div className="absolute top-2 right-2 flex space-x-2 z-10">
                        <div className="relative group/info">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (!project.githubLink) {
                                e.preventDefault();
                                e.stopPropagation();
                                setExpandedProject(isExpanded ? null : project.title);
                              } else {
                                e.stopPropagation();
                              }
                            }}
                            className={`text-gray-500 hover:text-gray-300 transition-colors ${!project.githubLink ? 'cursor-default' : 'cursor-pointer'}`}
                          >
                            <FiInfo size={16} />
                          </a>
                          <div className="absolute mt-1 right-0 opacity-0 group-hover/info:opacity-100 bg-black border border-gray-800 text-xs text-white px-2 py-1 rounded whitespace-nowrap z-[999] pointer-events-none transition-opacity duration-200">
                            {project.githubLink ? "View Source Code" : "No Source Code Available"}
                          </div>
                        </div>
                        {hasLink && (
                          <div className="relative group/link">
                            <span className="text-gray-500 group-hover:text-gray-300 transition-colors">
                              <FiExternalLink size={16} />
                            </span>
                            <div className="absolute mt-1 right-0 opacity-0 group-hover/link:opacity-100 bg-black border border-gray-800 text-xs text-white px-2 py-1 rounded whitespace-nowrap z-[999] pointer-events-none transition-opacity duration-200">
                              Visit Project Website
                            </div>
                          </div>
                        )}
                      </div>
                      {cardContent}
                    </a>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-400">No projects match the selected filters.</p>
              <button
                onClick={clearFilters}
                className="mt-2 px-3 py-1 text-sm rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
