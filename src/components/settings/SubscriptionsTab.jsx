// src/components/settings/SubscriptionsTab.jsx
import React, { useState } from "react";
import ManageSubscriptionView from "./ManageSubscriptionView";
import CancelPlanModal from "../modals/CancelPlanModal";
import ChangePaymentModal from "../modals/ChangePaymentModal";

const VisaIcon = ({ className = "w-10 h-auto" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className={className}
    role="img"
    aria-labelledby="pi-visa"
  >
    <title id="pi-visa">Visa</title>
    <path
      fill="#FFF"
      d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
    />
    <path
      fill="#142688"
      d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4z"
    />
    <path
      fill="#142688"
      d="M152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
    />
  </svg>
);

const SubscriptionsTab = ({ navigateTo }) => {
  const [showManagePlanView, setShowManagePlanView] = useState(false);
  const [currentPlanId, setCurrentPlanId] = useState("Pro");
  const [showCancelPlanModal, setShowCancelPlanModal] = useState(false);
  const [showChangePaymentModal, setShowChangePaymentModal] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeMessage, setPromoCodeMessage] = useState({
    type: "",
    text: "",
  });

  const plans = [
    {
      id: "Free",
      name: "Free",
      price: "£0",
      per: "/mo",
      features: [
        "Basic AI suggestions",
        "Limited job tracking",
        "Community support",
      ],
    },
    {
      id: "Pro",
      name: "Pro",
      price: "£9.99",
      per: "/mo",
      features: [
        "Advanced AI assistance",
        "Unlimited job tracking",
        "Cover letter generator",
        "Priority support",
      ],
    },
    {
      id: "Business",
      name: "Business",
      price: "£19.99",
      per: "/mo/user",
      features: [
        "All Pro features",
        "Team collaboration",
        "Admin dashboard",
        "Dedicated support",
      ],
    },
  ];
  const currentPlanDetails = plans.find((plan) => plan.id === currentPlanId);

  const handlePlanChange = (planId) => setCurrentPlanId(planId);

  const handleConfirmCancelPlan = () => {
    setShowCancelPlanModal(false);
    setCurrentPlanId("Free");
    // In a real app, you might show a toast notification here
  };

  const handleSaveNewPayment = () => {
    setShowChangePaymentModal(false);
    // Show success message
  };

  const handleApplyPromoCode = () => {
    if (promoCode.trim().toUpperCase() === "SAVE20") {
      setPromoCodeMessage({
        type: "success",
        text: 'Promo code "SAVE20" applied successfully!',
      });
    } else {
      setPromoCodeMessage({ type: "error", text: "Invalid promo code." });
    }
    setTimeout(() => setPromoCodeMessage({ type: "", text: "" }), 3000);
  };

  const formatDisplayDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (showManagePlanView) {
    return (
      <ManageSubscriptionView
        currentPlanId={currentPlanId}
        plans={plans}
        billingHistory={[]} // Pass history if available
        onPlanChange={handlePlanChange}
        onBackToSummary={() => setShowManagePlanView(false)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)] mb-0">
        Subscriptions & Billing
      </h3>
      <div className="p-5 border border-[var(--color-border-light)] rounded-lg space-y-3.5">
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)]">
          Current Plan Summary
        </h4>
        <p className="text-sm">
          <span className="font-medium">Plan:</span> {currentPlanDetails?.name}
        </p>
        <p className="text-sm">
          <span className="font-medium">Price:</span>{" "}
          {currentPlanDetails?.price} {currentPlanDetails?.per}
        </p>
        <p className="text-xs text-[var(--color-text-subtle)]">
          Renews on: {formatDisplayDate("2025-08-01")}
        </p>
        <p className="text-xs text-[var(--color-text-subtle)]">
          Status:{" "}
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300">
            Active
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <button
            onClick={() => setShowManagePlanView(true)}
            className="px-4 py-2 text-xs font-medium bg-[var(--color-primary-action)] text-[var(--color-text-white)] rounded-md hover:bg-[var(--color-primary-action-hover)]"
          >
            Manage Plan
          </button>
          <button
            onClick={() => setShowCancelPlanModal(true)}
            className="px-4 py-2 text-xs font-medium border border-[var(--color-error-red)] text-[var(--color-error-red)] rounded-md hover:bg-red-50 dark:hover:bg-red-700/20"
          >
            Cancel Plan
          </button>
        </div>
      </div>
      <div className="p-5 border border-[var(--color-border-light)] rounded-lg space-y-3">
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)]">
          Billing Details
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <span className="font-medium mr-2">Payment Method:</span>
            <VisaIcon className="w-8 h-auto mr-2" />
            <span>Visa •••• 1234</span>
          </div>
          <button
            onClick={() => setShowChangePaymentModal(true)}
            className="text-xs text-[var(--color-primary-action)] hover:underline"
          >
            Change
          </button>
        </div>
      </div>
      <div>
        <label
          htmlFor="promoCode"
          className="block text-sm font-semibold text-[var(--color-text-heading-secondary)] mb-1.5"
        >
          Have a promo code?
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            id="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="form-input flex-grow text-sm p-2 rounded-md border-[var(--color-border-medium)] bg-[var(--color-component-background)] focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)]"
          />
          <button
            onClick={handleApplyPromoCode}
            className="px-4 py-2 text-sm font-medium bg-[var(--color-primary-action)] text-[var(--color-text-white)] rounded-md hover:bg-[var(--color-primary-action-hover)]"
          >
            Apply
          </button>
        </div>
        {promoCodeMessage.text && (
          <p
            className={`mt-1.5 text-xs ${
              promoCodeMessage.type === "success"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {promoCodeMessage.text}
          </p>
        )}
      </div>
      <CancelPlanModal
        isOpen={showCancelPlanModal}
        onClose={() => setShowCancelPlanModal(false)}
        onConfirmCancel={handleConfirmCancelPlan}
      />
      <ChangePaymentModal
        isOpen={showChangePaymentModal}
        onClose={() => setShowChangePaymentModal(false)}
        onSavePayment={handleSaveNewPayment}
      />
    </div>
  );
};

export default SubscriptionsTab;
