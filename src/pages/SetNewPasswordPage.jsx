// src/pages/SetNewPasswordPage.jsx
import React, { useState } from "react";

// Assuming these icons are correctly defined in your Icons.jsx file
// and the import path is correct for your project structure.
// If this page is in src/pages/, then '../components/ui/Icons' is typical.
import {
  SpinnerIcon,
  SuccessIcon,
  ErrorIcon,
  // LockIcon will be defined locally below if not imported
} from "../components/ui/Icons";

// Locally defined icons
const LockIcon = (
  { className = "w-5 h-5" } // For password fields
) => (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const RightPanelSetPasswordContent = () => {
  const localImageUrl = "/isometric_illustration_set_password.png"; // Or another relevant image

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative p-6 md:p-10 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/10 to-transparent filter blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 to-transparent filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
          Secure Your Account
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xs mx-auto">
          Choose a strong and unique password to keep your uHired account safe.
        </p>

        <div className="relative w-full max-w-[240px] sm:max-w-xs md:max-w-sm aspect-square rounded-lg flex items-center justify-center p-4 my-4">
          <img
            src={localImageUrl}
            alt="Secure Account Illustration"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.alt =
                "Illustration not found. Check /public folder & filename.";
              e.target.src =
                "https://placehold.co/300x300/4A5568/A0AEC0?text=Secure&font=inter";
            }}
          />
        </div>
        <p className="text-xs text-slate-400/80">
          A strong password is key to your account's security.
        </p>
      </div>
    </div>
  );
};

function SetNewPasswordPage({ navigateTo }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  // TODO: In a real app, you would likely get a reset token from the URL query parameters
  // const [token, setToken] = useState('');
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const resetToken = params.get('token');
  //   if (resetToken) {
  //     setToken(resetToken);
  //   } else {
  //     setFormMessage({ type: 'error', text: 'Invalid or missing password reset token.' });
  //     // Optionally redirect to login or request reset page after a delay
  //     setTimeout(() => navigateTo('login'), 3000);
  //   }
  // }, [navigateTo]);

  const validatePasswords = () => newPassword === confirmNewPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage({ type: "", text: "" });

    if (!newPassword || !confirmNewPassword) {
      setFormMessage({
        type: "error",
        text: "Please fill in both password fields.",
      });
      return;
    }
    if (!validatePasswords()) {
      setFormMessage({ type: "error", text: "Passwords do not match." });
      return;
    }
    if (newPassword.length < 8) {
      setFormMessage({
        type: "error",
        text: "Password must be at least 8 characters.",
      });
      return;
    }
    // if (!token) { // Check if token is present
    //   setFormMessage({ type: 'error', text: 'Password reset token is missing. Please request a new link.' });
    //   return;
    // }

    setIsLoading(true);
    // --- TODO: Actual API call to set new password with token ---
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // console.log("Setting new password:", { token, newPassword });

    setFormMessage({
      type: "success",
      text: "Your password has been reset successfully. You can now log in.",
    });
    setNewPassword("");
    setConfirmNewPassword("");
    setIsLoading(false);
    setTimeout(() => navigateTo("login"), 3000); // Redirect to login after success
  };

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
          <div className="mb-6 mt-[-163px] text-left">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-action)] to-[var(--color-secondary-purple,#8B5CF6)]">
              uHired
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-normal text-white mb-4">
            Create a New Password
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="new-password"
                className="block text-xs font-medium text-slate-300 mb-1 sr-only"
              >
                New Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-slate-400" />
                </span>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-input w-full pl-10 pr-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:border-transparent transition"
                  placeholder="New Password"
                  required
                  minLength="8"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm-new-password"
                className="block text-xs font-medium text-slate-300 mb-1 sr-only"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-slate-400" />
                </span>
                <input
                  type="password"
                  id="confirm-new-password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className={`form-input w-full pl-10 pr-4 py-3 bg-slate-700/80 border rounded-lg text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition ${
                    newPassword && confirmNewPassword && !validatePasswords()
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-600 focus:ring-[var(--color-primary-action)] focus:border-transparent"
                  }`}
                  placeholder="Confirm New Password"
                  required
                  disabled={isLoading}
                />
              </div>
              {newPassword && confirmNewPassword && !validatePasswords() && (
                <p className="text-red-400 text-xs mt-1.5">
                  Passwords do not match.
                </p>
              )}
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
                Save New Password
              </button>
            </div>
          </form>
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
          <RightPanelSetPasswordContent />
        </div>
      </div>
      <footer className="text-center text-xs text-slate-400/70 py-5 mt-auto">
        © {new Date().getFullYear()} uHired. All rights reserved.
      </footer>
    </div>
  );
}

export default SetNewPasswordPage;
