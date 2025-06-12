import React, { useState, useEffect } from "react";

// --- SVG Icon Components ---
// It's a good practice to keep these in a separate file (e.g., Icons.jsx)
const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const FilterIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);
const BriefcaseIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const PoundIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4v6a2 2 0 1 1-4 0v-6a2 2 0 1 0-4 0v6a2 2 0 1 1-4 0V9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
    <path d="M7 15h10"></path>
  </svg>
);
const ZapIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
const EditIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);
const BookmarkIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
  </svg>
);
const MatchIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);
const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
const ArrowLeftIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

// --- Dummy Data ---
const initialJobs = [
  {
    id: 1,
    title: "Senior Backend Engineer (Go)",
    company: "Checkout.com",
    companyLogoUrl: "https://logo.clearbit.com/checkout.com",
    location: "London, UK",
    type: "Full-time",
    schedule: "Mon-Fri",
    salary: "£90,000 - £120,000",
    match: 95,
    isEasyApply: true,
    posted: "2d ago",
    tags: ["Go", "Kubernetes", "AWS", "Fintech", "Senior"],
    description:
      "Join our dynamic payments platform as a Senior Backend Engineer. You will be instrumental in designing, building, and maintaining the core services that power our global financial technology solutions, handling millions of transactions daily.",
    responsibilities: [
      "Architect and build robust, scalable, and high-performance backend systems using Go.",
      "Collaborate with front-end developers, product managers, and designers to deliver new features.",
      "Write clean, maintainable, and well-tested code while mentoring junior engineers.",
      "Improve engineering standards, tooling, and processes.",
    ],
  },
  {
    id: 2,
    title: "AI Research Scientist",
    company: "DeepMind",
    companyLogoUrl: "https://logo.clearbit.com/deepmind.com",
    location: "London, UK",
    type: "Full-time",
    schedule: "Mon-Fri",
    salary: "£110,000 - £150,000",
    match: 92,
    isEasyApply: false,
    posted: "5d ago",
    tags: ["Python", "PyTorch", "Research", "AI", "Senior"],
    description:
      "As an AI Research Scientist, you will contribute to fundamental advances in artificial intelligence. You will work on ambitious, long-term research projects, collaborating with a team of world-class researchers and engineers.",
    responsibilities: [
      "Develop novel AI models and algorithms.",
      "Run large-scale experiments and analyze results to gain new insights.",
      "Publish research findings in top-tier academic venues.",
      "Collaborate on the implementation of research ideas into practical applications.",
    ],
  },
  {
    id: 3,
    title: "React Native Developer",
    company: "Revolut",
    companyLogoUrl: "https://logo.clearbit.com/revolut.com",
    location: "Remote (UK)",
    type: "Full-time",
    schedule: "Flexible",
    salary: "£75,000 - £95,000",
    match: 88,
    isEasyApply: true,
    posted: "1w ago",
    tags: ["React Native", "TypeScript", "Mobile", "Mid-level"],
    description:
      "We are looking for a talented React Native developer to join our mobile team. You will be responsible for building new features for our award-winning app, used by millions of people worldwide.",
    responsibilities: [
      "Develop and maintain high-quality mobile applications using React Native.",
      "Work with product teams to translate requirements into well-designed technical solutions.",
      "Optimize application for maximum performance and scalability.",
      "Write unit and integration tests to ensure code quality.",
    ],
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Spotify",
    companyLogoUrl: "https://logo.clearbit.com/spotify.com",
    location: "London, UK",
    type: "Full-time",
    schedule: "Flexible",
    salary: "£70,000 - £90,000",
    match: 85,
    isEasyApply: true,
    posted: "3d ago",
    tags: ["Python", "SQL", "Machine Learning", "Data Science", "Mid-level"],
    description:
      "As a Data Scientist at Spotify, you will help us understand our users and our business. You will work with large datasets to extract insights, build models, and influence product decisions.",
    responsibilities: [
      "Apply statistical analysis and machine learning techniques to solve business problems.",
      "Design and run A/B tests to validate hypotheses.",
      "Build and maintain data pipelines and dashboards.",
      "Communicate findings to stakeholders across the company.",
    ],
  },
  {
    id: 5,
    title: "Cyber Security Analyst",
    company: "BAE Systems",
    companyLogoUrl: "https://logo.clearbit.com/baesystems.com",
    location: "Guildford, UK",
    type: "Full-time",
    schedule: "Mon-Fri",
    salary: "£45,000 - £65,000",
    match: 78,
    isEasyApply: false,
    posted: "6d ago",
    tags: ["Cyber Security", "SIEM", "Networking", "Entry-level"],
    description:
      "Join a leading global defence, aerospace and security company. As a Cyber Security Analyst, you will be on the front lines of protecting our critical systems and data from threats.",
    responsibilities: [
      "Monitor security alerts and investigate potential incidents.",
      "Perform vulnerability assessments and penetration testing.",
      "Help to develop and implement security policies and procedures.",
      "Stay up-to-date with the latest cyber threats and security trends.",
    ],
  },
];

// --- Sub-Components ---

const JobList = ({ jobs, isLoading, selectedJobId, onSelectJob }) => (
  <div className="flex flex-col h-full">
    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3 px-1 flex-shrink-0">
      {isLoading
        ? "Searching for opportunities..."
        : `Showing ${jobs.length} relevant jobs`}
    </p>
    <div className="flex-grow overflow-y-auto pr-2 -mr-2 space-y-3">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50 animate-pulse"
          >
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-1/2"></div>
          </div>
        ))
      ) : jobs.length > 0 ? (
        jobs.map((job) => (
          <button
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`w-full text-left p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
              selectedJobId === job.id
                ? "bg-sky-50 dark:bg-sky-900/30 border-sky-500 ring-2 ring-sky-500"
                : "bg-[var(--color-component-background)] border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-600 hover:shadow-md"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-100 pr-2">
                {job.title}
              </h3>
              <div
                className={`flex-shrink-0 flex items-center space-x-1 text-xs font-semibold ${
                  job.match > 89 ? "text-green-600" : "text-amber-600"
                }`}
              >
                <MatchIcon />
                <span>{job.match}%</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
              {job.company}
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <p className="flex items-center">
                <MapPinIcon className="w-3.5 h-3.5 mr-1.5" />
                {job.location}
              </p>
              <p className="flex items-center">
                <PoundIcon className="w-3.5 h-3.5 mr-1.5" />
                {job.salary}
              </p>
              <p className="flex items-center">
                <BriefcaseIcon className="w-3.5 h-3.5 mr-1.5" />
                {job.type} ({job.schedule})
              </p>
            </div>
          </button>
        ))
      ) : (
        <div className="p-8 text-center flex flex-col items-center justify-center h-full">
          <SearchIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-4" />
          <h3 className="font-semibold text-slate-700 dark:text-slate-300">
            No Jobs Found
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  </div>
);

const JobDetails = ({ job, isLoading, onClearSelection }) => {
  if (isLoading) {
    return (
      <div className="p-8 animate-pulse">
        <div className="h-8 bg-slate-300 dark:bg-slate-600 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/2 mb-8"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-5/6"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="hidden lg:flex p-8 text-center flex-col items-center justify-center h-full">
        <SearchIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-4" />
        <h3 className="font-semibold text-slate-700 dark:text-slate-300">
          Select a Job
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Choose a job from the list to see the details here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-component-background)] rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)] flex flex-col h-full">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {job.companyLogoUrl && (
              <img
                src={job.companyLogoUrl}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-md object-contain border p-1 bg-white"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            )}
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                {job.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {job.company}
              </p>
            </div>
          </div>
          <button
            onClick={onClearSelection}
            className="lg:hidden text-slate-500 hover:text-sky-600 flex items-center gap-2 text-sm"
          >
            <ArrowLeftIcon /> Back to list
          </button>
        </div>
      </div>

      <div className="flex-grow p-6 overflow-y-auto text-base text-slate-700 dark:text-slate-300 space-y-6">
        {/* Details content... */}
      </div>

      <div className="p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl flex flex-col sm:flex-row gap-3 flex-shrink-0">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow-md">
          <ZapIcon /> Auto-Apply
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
          <EditIcon /> Tailor Resume
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
          <BookmarkIcon /> Track Job
        </button>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const App = () => {
  const [allJobs] = useState(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // State for search inputs
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  // State for filters
  const [activeFilters, setActiveFilters] = useState({
    jobType: [],
    experienceLevel: [],
  });

  const applyFilters = () => {
    let jobs = [...allJobs];

    // Filter by search term
    if (searchTerm) {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by location
    if (locationTerm) {
      jobs = jobs.filter((job) =>
        job.location.toLowerCase().includes(locationTerm.toLowerCase())
      );
    }

    // Filter by Job Type
    if (activeFilters.jobType.length > 0) {
      jobs = jobs.filter((job) => activeFilters.jobType.includes(job.type));
    }

    // Filter by Experience Level
    if (activeFilters.experienceLevel.length > 0) {
      jobs = jobs.filter((job) =>
        activeFilters.experienceLevel.some((level) =>
          job.tags.map((t) => t.toLowerCase()).includes(level.toLowerCase())
        )
      );
    }

    setFilteredJobs(jobs);

    // If a selected job is no longer in the filtered list, deselect it.
    if (selectedJob && !jobs.find((j) => j.id === selectedJob.id)) {
      setSelectedJob(null);
    }
  };

  // Run once on mount
  useEffect(() => {
    setFilteredJobs(allJobs);
    if (window.innerWidth >= 1024) {
      setSelectedJob(allJobs[0]);
    }
    setIsLoading(false);
  }, [allJobs]);

  const handleFilterChange = (category, value) => {
    setActiveFilters((prev) => {
      const currentFilters = prev[category];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];
      return { ...prev, [category]: newFilters };
    });
  };

  // Trigger filtering when search button is clicked
  const handleSearch = () => {
    applyFilters();
  };

  // Also re-apply filters whenever activeFilters change
  useEffect(() => {
    applyFilters();
  }, [activeFilters]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  const handleClearSelection = () => {
    setSelectedJob(null);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[var(--color-page-background)] text-[var(--color-text-primary)] p-4 sm:p-6 lg:p-8">
      <div className="flex-shrink-0">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading-primary)]">
            Find Your Next Opportunity
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Our AI has curated these roles just for you.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="text-slate-400 w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-[var(--color-component-background)] focus:ring-2 focus:ring-sky-500 outline-none text-sm"
            />
          </div>
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPinIcon className="text-slate-400 w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="City or remote"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-[var(--color-component-background)] focus:ring-2 focus:ring-sky-500 outline-none text-sm"
            />
          </div>
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow"
          >
            Search
          </button>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <FilterIcon />
            <span>Filters</span>
          </button>
        </div>
        {/* Filter Panel */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isFilterOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Job Type
                </label>
                <div className="mt-2 space-y-2">
                  {["Full-time", "Contract", "Part-time"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={activeFilters.jobType.includes(type)}
                        onChange={() => handleFilterChange("jobType", type)}
                        className="h-4 w-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-900"
                      />{" "}
                      <span className="ml-2 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Experience Level
                </label>
                <div className="mt-2 space-y-2">
                  {["Entry-level", "Mid-level", "Senior"].map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={activeFilters.experienceLevel.includes(level)}
                        onChange={() =>
                          handleFilterChange("experienceLevel", level)
                        }
                        className="h-4 w-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-900"
                      />{" "}
                      <span className="ml-2 text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow min-h-0">
        <div
          className={`${
            selectedJob ? "hidden" : "block"
          } lg:block lg:col-span-5 xl:col-span-4 h-full`}
        >
          <JobList
            jobs={filteredJobs}
            isLoading={isLoading}
            selectedJobId={selectedJob?.id}
            onSelectJob={handleSelectJob}
          />
        </div>
        <div
          className={`${
            selectedJob ? "block" : "hidden"
          } lg:block lg:col-span-7 xl:col-span-8 h-full`}
        >
          <JobDetails
            job={selectedJob}
            isLoading={isLoading && !selectedJob}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
