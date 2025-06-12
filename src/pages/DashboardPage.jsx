// src/pages/DashboardPage.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";

// --- SVG Icon Components ---
// To keep this as a single file, all icons are defined here.

const BellIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <circle cx="18" cy="5" r="3" fill="var(--color-error-red)" stroke="none" />
  </svg>
);

const SecurityShieldIcon = ({ className = "w-6 h-6" }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const MatchIcon = ({ className = "w-4 h-4" }) => (
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

const PdfLogoIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96px"
    height="96px"
    viewBox="0 0 56 64"
    enableBackground="new 0 0 56 64"
    xmlSpace="preserve"
    className={className}
  >
    <g>
      {" "}
      <path
        fill="#AD0B00"
        d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"
      ></path>{" "}
      <path
        fill="#7A0000"
        d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"
      ></path>{" "}
      <path
        opacity="0.5"
        fill="#FFFFFF"
        enableBackground="new "
        d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"
      ></path>{" "}
    </g>{" "}
    <path
      fill="#FFFFFF"
      d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7 c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1 h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7 s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7 C42.2,42.8,41.9,43.1,41.5,43.1z"
    ></path>
  </svg>
);

const DocLogoIcon = ({ className = "w-5 h-5" }) => (
  <svg
    width="87px"
    height="87px"
    viewBox="-4 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    className={className}
  >
    <g fillRule="evenodd">
      {" "}
      <path
        d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z"
        fill="#107CAD"
      ></path>{" "}
      <path
        d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z"
        fill="#084968"
      ></path>{" "}
      <path
        d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z"
        fill="#90D0FE"
        opacity=".5"
      ></path>{" "}
    </g>{" "}
    <path
      d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z"
      fill="#ffffff"
    ></path>
  </svg>
);

const MoreIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const UploadIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const CheckCircleIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const KeyboardIcon = ({ className = "w-6 h-6" }) => (
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
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
    <path d="M6 8h.01"></path>
    <path d="M10 8h.01"></path>
    <path d="M14 8h.01"></path>
    <path d="M18 8h.01"></path>
    <path d="M8 12h.01"></path>
    <path d="M12 12h.01"></path>
    <path d="M16 12h.01"></path>
    <path d="M7 16h10"></path>
  </svg>
);

const RefreshCwIcon = ({ className = "w-4 h-4" }) => (
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
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M3 21v-5h5"></path>
  </svg>
);

const TrendingUpIcon = ({ className = "w-6 h-6" }) => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }) => (
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
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const InfoIcon = ({ className = "w-4 h-4" }) => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

// --- Main Dashboard Page Component ---
const DashboardPage = ({ userName = "Saadatu Yakubu" }) => {
  const [showWins, setShowWins] = useState(true);

  // --- Game State ---
  const GAME_DURATION = 30; // seconds
  const gameSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Software engineering requires logical thinking.",
    "A well-tailored resume can open many doors.",
    "Persistence is key in the modern job market.",
    "Continuous learning is vital for a tech career.",
  ];
  const [sentence, setSentence] = useState(gameSentences[0]);
  const [typedText, setTypedText] = useState("");
  const [gameActive, setGameActive] = useState(false);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [results, setResults] = useState({ wpm: 0, accuracy: 0 });
  const intervalRef = useRef(null);
  const inputRef = useRef(null);
  const startTimeRef = useRef(0);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const firstName = userName.split(" ")[0];

  const startGame = () => {
    setGameActive(true);
    setTypedText("");
    setResults({ wpm: 0, accuracy: 0 });
    setTimer(GAME_DURATION);

    // Ensure the next sentence is different from the current one
    let newSentence = sentence;
    while (newSentence === sentence) {
      newSentence =
        gameSentences[Math.floor(Math.random() * gameSentences.length)];
    }
    setSentence(newSentence);

    if (inputRef.current) {
      inputRef.current.focus();
    }
    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endGame = useCallback(() => {
    if (!gameActive) return; // Prevent multiple calls

    setGameActive(false);
    clearInterval(intervalRef.current);

    if (typedText && typedText.trim().length > 0) {
      const timeElapsed = (Date.now() - startTimeRef.current) / 1000 / 60; // in minutes
      const wordsTyped = typedText.trim().split(/\s+/).filter(Boolean).length;
      const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;

      let correctChars = 0;
      typedText.split("").forEach((char, index) => {
        if (sentence[index] === char) {
          correctChars++;
        }
      });
      const accuracy = Math.round((correctChars / typedText.length) * 100) || 0;

      setResults({ wpm, accuracy });
    } else {
      setResults({ wpm: 0, accuracy: 0 });
    }
  }, [gameActive, typedText, sentence]);

  useEffect(() => {
    if (timer <= 0 && gameActive) {
      endGame();
    }
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [timer, gameActive, endGame]);

  const handleTyping = (e) => {
    if (!gameActive) return;
    setTypedText(e.target.value);
    if (e.target.value === sentence) {
      endGame();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && gameActive) {
      e.preventDefault();
      endGame();
    }
  };

  // Dummy data for other components
  const jobMatches = [
    {
      id: 1,
      title: "Senior DevOps Engineer",
      company: "Monzo Bank",
      location: "London, UK (Hybrid)",
      match: 92,
      salary: "£85,000 - £110,000",
      isEasyApply: true,
    },
    {
      id: 2,
      title: "Full-Stack Engineer (Python/React)",
      company: "Deliveroo",
      location: "Manchester, UK",
      match: 85,
      salary: "£70,000 - £90,000",
      isEasyApply: false,
    },
  ];

  const skillData = [
    { name: "Cloud Computing (AWS/Azure)", level: "Advanced", progress: 85 },
    { name: "DevOps (Docker, Kubernetes)", level: "Proficient", progress: 65 },
    { name: "AI / Machine Learning", level: "Intermediate", progress: 40 },
  ];

  const devRecommendations = [
    {
      title: "Contribute to an Open Source Project",
      desc: "Showcase your DevOps skills by contributing to a project that uses Kubernetes.",
    },
    {
      title: "Build a Project with a new AI API",
      desc: "Boost your AI/ML skills by creating a simple app using a trending AI service.",
    },
  ];

  const applicationStats = [
    { label: "Saved", count: 2, color: "text-slate-500" },
    { label: "Applied", count: 12, color: "text-sky-600 dark:text-sky-400" },
    { label: "Interview", count: 3, color: "text-purple-500" },
    { label: "Offer", count: 1, color: "text-green-500" },
  ];

  const recentActivity = [
    "Your application for Senior DevOps Engineer moved to the next stage!",
    "An interview was scheduled with Coinbase for next Tuesday.",
  ];

  const handleLinkClick = (e) => e.preventDefault();

  const getWpmFeedback = (wpm) => {
    if (wpm > 60) return "Excellent speed!";
    if (wpm > 40) return "Great focus!";
    return "Solid attempt, keep practicing!";
  };

  const gameButtonText =
    results.wpm > 0 && !gameActive ? "Play Again" : "Start";

  return (
    <div className="w-full space-y-8">
      {/* Header Section */}
      <header>
        <h1 className="text-2xl font-bold text-[var(--color-text-heading-primary)]">
          {getGreeting()},{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            {firstName}
          </span>
          !
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Let's land that dream role today.
        </p>
      </header>

      {/* "Weekly Wins" Notification */}
      {showWins && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 text-green-800 dark:text-green-300 p-4 rounded-lg shadow-sm flex justify-between items-center transition-all duration-300 ease-in-out">
          <div className="flex items-center">
            <BellIcon className="mr-3 w-5 h-5 text-green-500" />
            <p className="text-sm">
              <span className="font-bold">Weekly Win!</span> You landed an
              interview with Coinbase. Amazing progress!
            </p>
          </div>
          <button
            onClick={() => setShowWins(false)}
            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 text-2xl leading-none font-bold"
            aria-label="Dismiss"
          >
            &times;
          </button>
        </div>
      )}

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- Left Column (spans 2) --- */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recommended Next Step Card */}
          <div className="bg-[var(--color-component-background)] p-9 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)] border border-sky-200 dark:border-sky-700/50">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-3">
              Recommended Next Step
            </h2>
            <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <SecurityShieldIcon className="text-sky-600 dark:text-sky-400 mr-4 flex-shrink-0 w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    Prep for your Coinbase interview
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    Your interview is in 2 days. Let's run a final practice
                    session.
                  </p>
                </div>
              </div>
              <button
                onClick={handleLinkClick}
                className="bg-sky-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-sky-700 transition-colors whitespace-nowrap shadow-md"
              >
                Practice Now
              </button>
            </div>
          </div>

          {/* AI Job Matching Card */}
          <div className="bg-[var(--color-component-background)] p-8 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-4">
              Top AI Job Matches
            </h2>
            <div className="space-y-4">
              {jobMatches.map((job) => (
                <div
                  key={job.id}
                  className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                        {job.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <div
                      className={`mt-2 sm:mt-0 flex items-center space-x-2 text-xs font-semibold px-2.5 py-1 rounded-full h-fit ${
                        job.match > 89
                          ? "text-green-600 dark:text-green-300 bg-green-100 dark:bg-green-900/40"
                          : "text-amber-600 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40"
                      }`}
                    >
                      <MatchIcon />
                      <span>{job.match}% Match</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400">
                      {job.salary}
                    </p>
                    <div className="flex items-center space-x-2">
                      {job.isEasyApply && (
                        <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/40 px-2 py-0.5 rounded-full">
                          EASY APPLY
                        </span>
                      )}
                      <button
                        onClick={handleLinkClick}
                        className="bg-sky-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-sky-700 transition-colors shadow"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights Card */}
          <div className="bg-[var(--color-component-background)] p-10 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-4 flex items-center">
              <TrendingUpIcon className="mr-2 text-green-500" />
              Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Avg. Salary (UK)
                </p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                  £72,500
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  In-Demand Tech
                </p>
                <div className="flex space-x-2 mt-1">
                  <span className="text-[10px] font-bold text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/40 px-2 py-0.5 rounded-full">
                    Go
                  </span>
                  <span className="text-[10px] font-bold text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/40 px-2 py-0.5 rounded-full">
                    Rust
                  </span>
                  <span className="text-[10px] font-bold text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/40 px-2 py-0.5 rounded-full">
                    AWS CDK
                  </span>
                </div>
              </div>
              <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Hiring Hotspots
                </p>
                <div className="flex items-center text-xs text-slate-600 dark:text-slate-300 space-x-4">
                  <span className="flex items-center">
                    <MapPinIcon className="mr-1.5" />
                    London
                  </span>
                  <span className="flex items-center">
                    <MapPinIcon className="mr-1.5" />
                    Manchester
                  </span>
                  <span className="flex items-center">
                    <MapPinIcon className="mr-1.5" />
                    Bristol
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stay Sharp Game Card */}
          <div className="bg-[var(--color-component-background)] p-10 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-4 flex items-center">
              <KeyboardIcon className="mr-2 text-purple-500" />
              Stay Sharp: Typing Test
            </h2>
            <div className="bg-slate-100 dark:bg-slate-800/60 p-4 rounded-lg font-mono text-sm tracking-wider">
              <p className="text-slate-600 dark:text-slate-300 mb-2 min-h-[40px]">
                {sentence.split("").map((char, index) => {
                  let color = "text-slate-500 dark:text-slate-400";
                  if (index < typedText.length) {
                    color =
                      char === typedText[index]
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400 underline";
                  }
                  return (
                    <span key={index} className={color}>
                      {char}
                    </span>
                  );
                })}
              </p>
              <input
                ref={inputRef}
                type="text"
                value={typedText}
                onChange={handleTyping}
                onKeyDown={handleKeyDown}
                className="w-full bg-white dark:bg-slate-900 p-2 rounded-md text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 outline-none"
                disabled={!gameActive}
                onPaste={(e) => e.preventDefault()}
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={startGame}
                disabled={gameActive}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-purple-700 transition-colors shadow-md flex items-center space-x-2 disabled:opacity-50"
              >
                <RefreshCwIcon />
                <span>{gameButtonText}</span>
              </button>
              {gameActive && (
                <p className="text-lg font-bold text-purple-500">{timer}s</p>
              )}
              {results.wpm > 0 && !gameActive && (
                <div className="text-right">
                  <p className="text-xs font-medium text-green-500">
                    {getWpmFeedback(results.wpm)}
                  </p>
                  <p className="text-xl font-bold text-purple-600">
                    {results.wpm} WPM{" "}
                    <span className="text-sm font-medium text-slate-500">
                      ({results.accuracy}% acc)
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- Right Column --- */}
        <div className="space-y-8">
          {/* Application Tracker Card */}
          <div className="bg-[var(--color-component-background)] p-7 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-4">
              Application Tracker
            </h2>
            <div className="flex justify-between text-center space-x-2 text-xs">
              {applicationStats.map((stat) => (
                <a
                  key={stat.label}
                  href="#"
                  onClick={handleLinkClick}
                  className="flex-1 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 no-underline"
                >
                  <p className={`font-bold text-xl ${stat.color}`}>
                    {stat.count}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </p>
                </a>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-5 mb-2">
              Recent Activity
            </h3>
            <div className="space-y-2 text-xs">
              {recentActivity.map((activity, index) => (
                <p
                  key={index}
                  className="text-slate-600 dark:text-slate-400 flex items-start"
                >
                  <CheckCircleIcon className="w-3.5 h-3.5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  {activity}
                </p>
              ))}
            </div>
          </div>

          {/* Career Development Card REFINED */}
          <div className="bg-[var(--color-component-background)] p-10 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-1">
              Career Development
            </h2>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg text-xs text-slate-600 dark:text-slate-300 mb-4 flex items-start space-x-2">
              <InfoIcon className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
              <span>
                Our AI compares your resume skills to market demand for your
                target role. The bar shows how well you match what employers
                need.
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-2">
                Your Current Skill Analysis
              </h3>
              <div className="space-y-3">
                {skillData.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-xs font-medium">
                      <span className="text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                      <div
                        className="bg-sky-600 h-1.5 rounded-full"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Ideas Card */}
          <div className="bg-[var(--color-component-background)] p-10 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-4">
              Development Ideas
            </h2>
            <div className="space-y-2">
              {devRecommendations.map((rec) => (
                <a
                  key={rec.title}
                  href="#"
                  onClick={handleLinkClick}
                  className="block p-2.5 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg transition-colors no-underline"
                >
                  <p className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                    {rec.title}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    {rec.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Document Hub */}
          <div className="bg-[var(--color-component-background)] p-9 rounded-xl shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
            <h2 className="text-lg font-bold text-[var(--color-text-heading-primary)] mb-4">
              My Documents
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <PdfLogoIcon className="flex-shrink-0 w-5 h-5" />
                  <div className="overflow-hidden">
                    <p className="font-semibold text-xs truncate text-slate-800 dark:text-slate-200">
                      Alex_Evans_Resume_2025.pdf
                    </p>
                    <span className="text-[10px] bg-sky-200 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 font-semibold px-2 py-0.5 rounded-full">
                      Master
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLinkClick}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex-shrink-0 ml-2"
                >
                  <MoreIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <DocLogoIcon className="flex-shrink-0 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-xs truncate text-slate-800 dark:text-slate-200">
                      Cover_Letter_Fintech.docx
                    </p>
                    <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold px-2 py-0.5 rounded-full">
                      Template
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLinkClick}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex-shrink-0 ml-2"
                >
                  <MoreIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button
              onClick={handleLinkClick}
              className="w-full mt-4 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 py-2 rounded-lg text-xs font-semibold hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors flex items-center justify-center space-x-2"
            >
              <UploadIcon className="w-4 h-4" />
              <span>Upload Document</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
