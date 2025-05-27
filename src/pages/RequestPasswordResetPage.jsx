// src/pages/RequestPasswordResetPage.jsx
import React, { useState } from "react";
// Assuming these icons are correctly defined in your Icons.jsx file
// and the import path is correct for your project structure.
import {
  MailIcon as DefaultMailIcon, // Using Default to distinguish
  SpinnerIcon,
  SuccessIcon,
  ErrorIcon,
} from "../components/ui/Icons";

// Locally defined MailIcon if not imported or to override style for dark theme
const MailIcon = ({ className = "w-5 h-5 text-slate-400" }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const RightPanelRequestResetContent = () => {
  const localImageUrl = "/isometric_illustration_reset.png"; // Placeholder, update if needed

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative p-6 md:p-10 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/10 to-transparent filter blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 to-transparent filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
          Forgot Your Password?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xs mx-auto">
          No worries! We'll help you get back into your uHired account.
        </p>

        <div className="relative w-full max-w-[240px] sm:max-w-xs md:max-w-sm aspect-square rounded-lg flex items-center justify-center p-4 my-4">
          <img
            src={localImageUrl}
            alt="Password Reset Illustration"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.alt =
                "Illustration not found. Check /public folder & filename.";
              e.target.src =
                "https://placehold.co/300x300/4A5568/A0AEC0?text=Secure+Access&font=inter";
            }}
          />
        </div>
        <p className="text-xs text-slate-400/80">
          Follow the steps to regain access.
        </p>
      </div>
    </div>
  );
};

function RequestPasswordResetPage({ navigateTo }) {
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage({ type: "", text: "" });

    if (!email) {
      setFormMessage({
        type: "error",
        text: "Please enter your email address.",
      });
      return;
    }
    // Basic email validation (optional, but good practice)
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);
    // --- TODO: Actual API call to request password reset link ---
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormMessage({
      type: "success",
      text: `If an account exists for ${email}, you will receive a password reset link shortly.`,
    });
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-[var(--color-primary-action)] via-[#1E293B] to-[#0F172A] text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-inter overflow-hidden">
      {formMessage.text &&
        !isSubmitted && ( // Only show error/info messages before submission success
          <div
            className={`fixed top-5 left-1/2 -translate-x-1/2 p-2.5 px-5 rounded-lg shadow-xl z-[1000] text-sm
            ${formMessage.type === "error" ? "bg-red-600 text-white" : ""}
            ${formMessage.type === "info" ? "bg-sky-600 text-white" : ""} `}
          >
            {formMessage.text}
          </div>
        )}
      {isSubmitted &&
        formMessage.type === "success" && ( // Special display for success message after submission
          <div className="fixed top-5 left-1/2 -translate-x-1/2 p-3 px-6 rounded-lg shadow-xl z-[1000] text-sm bg-emerald-600 text-white text-center max-w-md">
            <SuccessIcon className="w-6 h-6 mx-auto mb-2" />
            {formMessage.text}
          </div>
        )}

      <div className="w-full max-w-4xl bg-slate-800/70 backdrop-blur-lg shadow-2xl rounded-2xl md:flex overflow-hidden my-auto">
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-6 mt-[-163px] text-left">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-action)] to-[var(--color-secondary-purple,#8B5CF6)]">
              uHired
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-normal text-white mb-2">
            Reset Your Password
          </h1>

          {!isSubmitted ? (
            <>
              <p className="text-slate-300 mb-7 text-sm">
                Enter your email address, and we'll send you a link to reset
                your password.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email-reset"
                    className="block text-xs font-medium text-slate-300 mb-1 sr-only"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-slate-400" />
                    </span>
                    <input
                      type="email"
                      id="email-reset"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input w-full pl-10 pr-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:border-transparent transition"
                      placeholder="Email address"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--color-primary-action)] to-[var(--color-secondary-purple,#8B5CF6)] hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-[var(--color-primary-action)] transition ease-in-out duration-150 disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <SpinnerIcon className="w-5 h-5 inline mr-2" />
                    ) : null}
                    Send Reset Link
                  </button>
                </div>
              </form>
            </>
          ) : null}
          {/* The success message is now handled by the fixed pop-up */}

          <p className="text-center text-xs text-slate-400 mt-8">
            Remembered your password?
            <button
              onClick={() => navigateTo("login")}
              className="font-medium text-[var(--color-primary-action)] hover:text-[var(--color-secondary-purple)] ml-1.5 underline"
            >
              Log In
            </button>
          </p>
        </div>

        <div className="w-full md:w-1/2 hidden md:flex bg-slate-900/50 relative items-center justify-center rounded-r-xl overflow-hidden">
          <RightPanelRequestResetContent />
        </div>
      </div>
      <footer className="text-center text-xs text-slate-400/70 py-5 mt-auto">
        © {new Date().getFullYear()} uHired. All rights reserved.
      </footer>
    </div>
  );
}

export default RequestPasswordResetPage;
