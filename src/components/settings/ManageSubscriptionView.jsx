// src/components/settings/ManageSubscriptionView.jsx
import React, { useState } from "react";

// Assuming icons are accessible or defined globally/passed as props if needed
const DownloadIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4H7.5a.5.5 0 00-.354.854l2.5 2.5a.5.5 0 00.708 0l2.5-2.5A.5.5 0 0012.5 11H11V7z"
      clipRule="evenodd"
    />
  </svg>
);

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
      fill="#142688"
      d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4z"
    />
    <path
      fill="#142688"
      d="M152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
    />
  </svg>
);

const MastercardIcon = ({ className = "w-10 h-auto" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 -54.25 482.51 482.51"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-labelledby="pi-mastercard"
  >
    <title id="pi-mastercard">Mastercard</title>
    <g>
      <path
        d="M317.05,197.6A149.5,149.5,0,0,1,373.79,80.39a149.1,149.1,0,1,0,0,234.42A149.5,149.5,0,0,1,317.05,197.6Z"
        transform="translate(-132.74 -48.5)"
        fill="#eb001b"
      />
      <path
        d="M615.26,197.6a148.95,148.95,0,0,1-241,117.21,149.43,149.43,0,0,0,0-234.42,148.95,148.95,0,0,1,241,117.21Z"
        transform="translate(-132.74 -48.5)"
        fill="#f79e1b"
      />
      <rect
        x="169.81"
        y="31.89"
        width="143.72"
        height="234.42"
        fill="#ff5f00"
      />
    </g>
  </svg>
);

const ManageSubscriptionView = ({
  currentPlanId,
  onPlanChange,
  onBackToSummary,
  plans = [],
}) => {
  const mockBillingHistory = [
    {
      id: 1,
      date: "July 1, 2025",
      amount: "£9.99",
      method: "Visa •••• 1234",
      status: "Paid",
      invoiceUrl: "#",
    },
    {
      id: 2,
      date: "June 1, 2025",
      amount: "£9.99",
      method: "Visa •••• 1234",
      status: "Paid",
      invoiceUrl: "#",
    },
    {
      id: 3,
      date: "May 1, 2025",
      amount: "£9.99",
      method: "Visa •••• 1234",
      status: "Paid",
      invoiceUrl: "#",
    },
    {
      id: 4,
      date: "April 1, 2025",
      amount: "£9.99",
      method: "Visa •••• 1234",
      status: "Paid",
      invoiceUrl: "#",
    },
    {
      id: 5,
      date: "March 1, 2025",
      amount: "£9.99",
      method: "Mastercard •••• 5678",
      status: "Paid",
      invoiceUrl: "#",
    },
  ];
  const [billingHistoryItemsToShow, setBillingHistoryItemsToShow] = useState(3);
  const visibleBillingHistory = mockBillingHistory.slice(
    0,
    billingHistoryItemsToShow
  );

  const getPlanButtonText = (plan) => {
    if (plan.id === currentPlanId) return "Current Plan";
    const currentIndex = plans.findIndex((p) => p.id === currentPlanId);
    const targetIndex = plans.findIndex((p) => p.id === plan.id);
    if (plan.id === "Free") return "Switch to Basic";
    if (targetIndex > currentIndex) return "Upgrade";
    return "Downgrade";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)]">
          Manage Plan & Billing
        </h3>
        <button
          onClick={onBackToSummary}
          className="text-xs text-[var(--color-primary-action)] hover:underline"
        >
          &larr; Back to Subscription Summary
        </button>
      </div>

      <div>
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)] mb-3">
          Available Plans
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-4 rounded-lg border flex flex-col justify-between transition-all ${
                plan.id === currentPlanId
                  ? "border-2 border-[var(--color-primary-action)] ring-2 ring-[var(--color-primary-action)] ring-opacity-50"
                  : "border-[var(--color-border-light)] hover:shadow-lg"
              }`}
            >
              <div>
                <h5 className="font-semibold text-md text-[var(--color-text-heading-primary)]">
                  {plan.name}
                </h5>
                <p className="text-xl font-bold text-[var(--color-text-heading-secondary)] my-1">
                  £{Math.round(parseFloat(plan.price.replace("£", "")))}
                  <span className="text-xs font-normal text-[var(--color-text-subtle)]">
                    {plan.per}
                  </span>
                </p>
                <ul className="text-xs text-[var(--color-text-subtle)] space-y-1 mb-4 list-disc list-inside pl-1 min-h-[60px]">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onPlanChange(plan.id)}
                disabled={plan.id === currentPlanId}
                className={`w-full mt-auto px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                  plan.id === currentPlanId
                    ? "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                    : "bg-[var(--color-primary-action)] text-[var(--color-text-white)] hover:bg-[var(--color-primary-action-hover)]"
                }`}
              >
                {getPlanButtonText(plan)}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)] mb-3 mt-6">
          Billing History
        </h4>
        {mockBillingHistory.length === 0 ? (
          <p className="text-sm text-[var(--color-text-subtle)]">
            No billing history available.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border-light)] border-opacity-75">
            <table className="min-w-full divide-y divide-[var(--color-border-light)] divide-opacity-50 text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-medium text-[var(--color-text-subtle)]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-medium text-[var(--color-text-subtle)]"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-medium text-[var(--color-text-subtle)]"
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-medium text-[var(--color-text-subtle)]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2.5 text-left font-medium text-[var(--color-text-subtle)]"
                  >
                    Invoice
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-light)] divide-opacity-50 bg-[var(--color-component-background)]">
                {visibleBillingHistory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2.5 whitespace-nowrap text-[var(--color-text-body)]">
                      {item.date}
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap text-[var(--color-text-body)]">
                      £{parseFloat(item.amount.replace("£", "")).toFixed(2)}
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap text-[var(--color-text-body)] flex items-center">
                      {item.method.includes("Visa") && (
                        <VisaIcon className="w-8 h-auto mr-1.5" />
                      )}
                      {item.method.includes("Mastercard") && (
                        <MastercardIcon className="w-8 h-auto mr-1.5" />
                      )}
                      {item.method}
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap">
                      <span
                        className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full ${
                          item.status === "Paid"
                            ? "bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap">
                      <button className="text-[var(--color-primary-action)] hover:text-[var(--color-primary-action-hover)] hover:underline text-xs inline-flex items-center">
                        <DownloadIcon className="w-3.5 h-3.5 mr-1" /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {mockBillingHistory.length > billingHistoryItemsToShow && (
          <div className="mt-3 text-center">
            <button
              onClick={() => setBillingHistoryItemsToShow((prev) => prev + 3)}
              className="text-xs font-medium text-[var(--color-primary-action)] hover:underline"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSubscriptionView;
