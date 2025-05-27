// src/pages/LoginPage.jsx
import React, { useState } from "react";
// Assuming these icons are correctly defined in your Icons.jsx file
// and the import path is correct for your project structure.
import {
  MailIcon as DefaultMailIcon,
  LockIcon as DefaultLockIcon,
  SpinnerIcon,
  SuccessIcon,
  ErrorIcon,
  GoogleIcon,
} from "../components/ui/Icons";

// Locally defined icons if not in a central Icons.jsx
const AppleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.383 12.978C17.383 11.012 18.705 10.008 18.741 9.971C17.625 8.318 16.038 7.956 15.357 7.919C13.814 7.734 12.618 8.738 11.974 8.738C11.33 8.738 10.025 7.771 8.594 7.883C7.199 7.995 5.769 8.886 4.941 10.466C3.24 13.505 4.356 17.617 5.906 19.765C6.67 20.769 7.663 21.908 8.931 21.871C10.084 21.834 10.533 21.194 11.974 21.194C13.414 21.194 13.826 21.834 15.057 21.871C16.325 21.871 17.191 20.843 17.917 19.802C18.708 18.689 19.001 17.484 19.038 17.41C19.001 17.373 17.383 16.57 17.383 14.604C17.383 13.023 18.425 12.259 18.462 12.222C17.804 11.991 17.383 12.978 17.383 12.978ZM12.726 5.181C13.415 4.355 13.827 3.203 13.715 2C12.673 2.074 11.509 2.714 10.783 3.503C10.139 4.217 9.677 5.369 9.826 6.521C10.942 6.633 12.038 5.97 12.726 5.181Z" />
  </svg>
);
const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const RightPanelLoginContent = () => {
  const localImageUrl = "/Isometric_illustration_login.png";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative p-6 md:p-10 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/10 to-transparent filter blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 to-transparent filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full">
        {/* Title for right panel - reduced font size and weight */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
          You're back—awesome!
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xs mx-auto">
          Log in to access your uHired dashboard and continue your job search.
        </p>

        <div className="relative w-full max-w-[240px] sm:max-w-xs md:max-w-sm aspect-square rounded-lg flex items-center justify-center p-4 my-4">
          <img
            src={localImageUrl}
            alt="Login Illustration"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.alt =
                "Illustration not found. Check /public folder & filename.";
              e.target.src =
                "https://placehold.co/300x300/4A5568/A0AEC0?text=Illustration+Missing&font=inter";
            }}
          />
        </div>
        <p className="text-xs text-slate-400/80">
          Your next opportunity is just a login away.
        </p>
      </div>
    </div>
  );
};

function LoginPage({ navigateTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage({ type: "", text: "" });
    if (!email || !password) {
      setFormMessage({
        type: "error",
        text: "Please enter email and password.",
      });
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (email === "user@example.com" && password === "password") {
      setFormMessage({
        type: "success",
        text: "Login Successful! Redirecting...",
      });
      // navigateTo('dashboard');
    } else {
      setFormMessage({ type: "error", text: "Invalid email or password." });
    }
    setIsLoading(false);
  };

  const handleSocialSignIn = (provider) => {
    setIsLoading(true);
    setFormMessage({ type: "info", text: `Redirecting to ${provider}...` });
    setTimeout(() => setIsLoading(false), 1500);
  };

  const socialButtonBaseStyle =
    "w-full flex items-center justify-center py-2.5 px-3 border border-slate-600 bg-slate-700/60 hover:bg-slate-700/90 rounded-lg text-xs font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-[var(--color-primary-action)] transition-colors duration-150 disabled:opacity-60";
  const socialIconStyle = "w-4 h-4 mr-2";

  return (
    <div className="bg-gradient-to-br from-[var(--color-primary-action)] via-[#1E293B] to-[#0F172A] text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-inter overflow-hidden">
      {formMessage.text && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 p-2.5 px-5 rounded-lg shadow-xl z-[1000] text-sm
            ${formMessage.type === "success" ? "bg-emerald-600 text-white" : ""}
            ${formMessage.type === "error" ? "bg-red-600 text-white" : ""}
            ${formMessage.type === "info" ? "bg-sky-600 text-white" : ""} `}
        >
          {formMessage.text}
        </div>
      )}

      <div className="w-full max-w-4xl bg-slate-800/70 backdrop-blur-lg shadow-2xl rounded-2xl md:flex overflow-hidden my-auto">
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-6 text-left">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-action)] to-[var(--color-secondary-purple,#8B5CF6)]">
              uHired
            </span>
          </div>
          {/* Log In title - centered, smaller font, normal weight */}
          <h1 className="text-xl sm:text-2xl font-normal text-white mb-2 text-center">
            Sign into your account
          </h1>
          {/* Subtitle updated */}
          <p className="text-slate-400 mb-4 text-sm text-center">Welcome!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:border-transparent transition"
                placeholder="Email address"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="password-login"
                className="block text-xs font-medium text-slate-300 mb-1 sr-only"
              >
                Password
              </label>
              <input
                type="password"
                id="password-login"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:border-transparent transition"
                placeholder="Password"
                required
                disabled={isLoading}
              />
            </div>
            <div className="text-right text-xs mt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-medium text-slate-400 hover:text-[var(--color-primary-action)] transition-colors"
              >
                Forgot password?
              </a>
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
                Login
              </button>
            </div>
          </form>

          <div className="relative my-5">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-slate-600" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-slate-800/80 px-2 text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleSocialSignIn("Google")}
              disabled={isLoading}
              className={socialButtonBaseStyle}
            >
              {" "}
              <GoogleIcon className={`${socialIconStyle} text-white`} /> Google
            </button>
            <button
              onClick={() => handleSocialSignIn("Apple")}
              disabled={isLoading}
              className={socialButtonBaseStyle}
            >
              {" "}
              <AppleIcon className={`${socialIconStyle} text-white`} /> Apple
            </button>
            <button
              onClick={() => handleSocialSignIn("LinkedIn")}
              disabled={isLoading}
              className={socialButtonBaseStyle}
            >
              {" "}
              <LinkedInIcon className={`${socialIconStyle} text-white`} />{" "}
              LinkedIn
            </button>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            Don't have an account?
            <button
              onClick={() => navigateTo("signup")}
              className="font-medium text-[var(--color-primary-action)] hover:text-[var(--color-secondary-purple)] ml-1.5 underline"
            >
              Sign up
            </button>
          </p>
        </div>

        <div className="w-full md:w-1/2 hidden md:flex bg-slate-900/50 relative items-center justify-center rounded-r-xl overflow-hidden">
          <RightPanelLoginContent />
        </div>
      </div>
      <footer className="text-center text-xs text-slate-400/70 py-5 mt-auto">
        © {new Date().getFullYear()} uHired. All rights reserved.
      </footer>
    </div>
  );
} // In LoginPage.jsx
// ...
<div className="text-right text-xs sm:text-sm">
  <button
    onClick={() => navigateTo("request-password-reset")}
    className="font-medium text-[var(--color-primary-action)] hover:text-[var(--color-primary-action-hover)]"
  >
    Forgot your password?
  </button>
</div>;
// ...

export default LoginPage;
