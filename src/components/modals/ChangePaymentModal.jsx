// src/components/modals/ChangePaymentModal.jsx
import React, { useState } from "react";

// Helper for form inputs
const FormInput = (props) => (
  <input
    {...props}
    className={`w-full px-3 py-2 text-sm border border-[var(--color-border-medium)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] bg-[var(--color-component-background)] text-[var(--color-text-body)] placeholder:text-[var(--color-text-placeholder)] ${
      props.readOnly
        ? "bg-slate-100 dark:bg-slate-700 text-[var(--color-text-subtle)] cursor-not-allowed"
        : ""
    } ${props.className || ""}`}
  />
);

// Card Icons
const VisaIcon = ({ className = "h-5 w-auto" }) => (
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
const MastercardIcon = ({ className = "h-5 w-auto" }) => (
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
        d="M220.13,421.67V396.82c0-9.53-5.8-15.74-15.32-15.74-5,0-10.35,1.66-14.08,7-2.9-4.56-7-7-13.25-7a14.07,14.07,0,0,0-12,5.8v-5h-7.87v39.76h7.87V398.89c0-7,4.14-10.35,9.94-10.35s9.11,3.73,9.11,10.35v22.78h7.87V398.89c0-7,4.14-10.35,9.94-10.35s9.11,3.73,9.11,10.35v22.78Zm129.22-39.35h-14.5v-12H327v12h-8.28v7H327V408c0,9.11,3.31,14.5,13.25,14.5A23.17,23.17,0,0,0,351,419.6l-2.49-7a13.63,13.63,0,0,1-7.46,2.07c-4.14,0-6.21-2.49-6.21-6.63V389h14.5v-6.63Zm73.72-1.24a12.39,12.39,0,0,0-10.77,5.8v-5h-7.87v39.76h7.87V399.31c0-6.63,3.31-10.77,8.7-10.77a24.24,24.24,0,0,1,5.38.83l2.49-7.46a28,28,0,0,0-5.8-.83Zm-111.41,4.14c-4.14-2.9-9.94-4.14-16.15-4.14-9.94,0-16.15,4.56-16.15,12.43,0,6.63,4.56,10.35,13.25,11.6l4.14.41c4.56.83,7.46,2.49,7.46,4.56,0,2.9-3.31,5-9.53,5a21.84,21.84,0,0,1-13.25-4.14l-4.14,6.21c5.8,4.14,12.84,5,17,5,11.6,0,17.81-5.38,17.81-12.84,0-7-5-10.35-13.67-11.6l-4.14-.41c-3.73-.41-7-1.66-7-4.14,0-2.9,3.31-5,7.87-5,5,0,9.94,2.07,12.43,3.31Zm120.11,16.57c0,12,7.87,20.71,20.71,20.71,5.8,0,9.94-1.24,14.08-4.56l-4.14-6.21a16.74,16.74,0,0,1-10.35,3.73c-7,0-12.43-5.38-12.43-13.25S445,389,452.07,389a16.74,16.74,0,0,1,10.35,3.73l4.14-6.21c-4.14-3.31-8.28-4.56-14.08-4.56-12.43-.83-20.71,7.87-20.71,19.88h0Zm-55.5-20.71c-11.6,0-19.47,8.28-19.47,20.71s8.28,20.71,20.29,20.71a25.33,25.33,0,0,0,16.15-5.38l-4.14-5.8a19.79,19.79,0,0,1-11.6,4.14c-5.38,0-11.18-3.31-12-10.35h29.41v-3.31c0-12.43-7.46-20.71-18.64-20.71h0Zm-.41,7.46c5.8,0,9.94,3.73,10.35,9.94H364.68c1.24-5.8,5-9.94,11.18-9.94ZM268.59,401.79V381.91h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18,0-19.47,8.7-19.47,20.71s8.28,20.71,19.47,20.71c5.8,0,9.94-2.07,12.84-5.8v5h7.87V401.79Zm-31.89,0c0-7.46,4.56-13.25,12.43-13.25,7.46,0,12,5.8,12,13.25,0,7.87-5,13.25-12,13.25-7.87.41-12.43-5.8-12.43-13.25Zm306.08-20.71a12.39,12.39,0,0,0-10.77,5.8v-5h-7.87v39.76H532V399.31c0-6.63,3.31-10.77,8.7-10.77a24.24,24.24,0,0,1,5.38.83l2.49-7.46a28,28,0,0,0-5.8-.83Zm-30.65,20.71V381.91h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18,0-19.47,8.7-19.47,20.71s8.28,20.71,19.47,20.71c5.8,0,9.94-2.07,12.84-5.8v5h7.87V401.79Zm-31.89,0c0-7.46,4.56-13.25,12.43-13.25,7.46,0,12,5.8,12,13.25,0,7.87-5,13.25-12,13.25C564.73,415.46,560.17,409.25,560.17,401.79Z"
        transform="translate(-132.74 -48.5)"
        fill="#444"
      />
      <g>
        <rect
          x="169.81"
          y="31.89"
          width="143.72"
          height="234.42"
          fill="#ff5f00"
        />
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
      </g>
    </g>
  </svg>
);
const AmexIcon = ({ className = "h-5 w-auto" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 24"
    fill="#0077C8"
    className={className}
    role="img"
    aria-labelledby="pi-amex"
  >
    <title id="pi-amex">American Express</title>
    <rect width="38" height="24" rx="3" fill="#0077C8" />
    <text
      x="50%"
      y="50%"
      dy=".3em"
      textAnchor="middle"
      fill="white"
      fontSize="8"
      fontFamily="sans-serif"
    >
      AMEX
    </text>
  </svg>
);
const DiscoverIcon = ({ className = "h-5 w-auto" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 24"
    fill="#FF6600"
    className={className}
    role="img"
    aria-labelledby="pi-discover"
  >
    <title id="pi-discover">Discover</title>
    <rect width="38" height="24" rx="3" fill="#FF6600" />
    <text
      x="50%"
      y="50%"
      dy=".3em"
      textAnchor="middle"
      fill="white"
      fontSize="6"
      fontFamily="sans-serif"
    >
      DISCOVER
    </text>
  </svg>
);
const CloseButtonIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChangePaymentModal = ({ isOpen, onClose, onSavePayment }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(""); // Initialize with empty string for placeholder

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!cardName.trim()) newErrors.cardName = "Name on card is required.";
    if (!cardNumber.replace(/\s/g, "").match(/^\d{13,19}$/))
      newErrors.cardNumber = "Card number must be 13-19 digits.";
    if (!expiryDate.match(/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/))
      newErrors.expiryDate = "Expiry must be MM/YY.";
    else {
      const [month, year] = expiryDate.split("/");
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      if (
        parseInt(year, 10) < currentYear ||
        (parseInt(year, 10) === currentYear &&
          parseInt(month, 10) < currentMonth)
      ) {
        newErrors.expiryDate = "Card has expired.";
      }
    }
    if (!cvc.match(/^\d{3,4}$/)) newErrors.cvc = "CVC must be 3 or 4 digits.";
    if (!selectedCountry) newErrors.country = "Please select a country."; // Validation for country

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSavePayment({
        cardNumber: cardNumber.replace(/\s/g, ""),
        expiryDate,
        cvc,
        cardName,
        country: selectedCountry,
      });
    }
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const parts = [];
    for (let i = 0; i < cleaned.length; i += 4) {
      parts.push(cleaned.substring(i, i + 4));
    }
    return parts.join(" ");
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, "").length <= 19) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2 && value.length <= 4) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    } else if (value.length > 4) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setExpiryDate(value);
  };

  const countries = [
    { value: "", label: "Please select a country..." }, // Placeholder option
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BR", label: "Brazil" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "CV", label: "Cabo Verde" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo, Republic of the" },
    { value: "CD", label: "Congo, Democratic Republic of the" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "SZ", label: "Eswatini" },
    { value: "ET", label: "Ethiopia" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GR", label: "Greece" },
    { value: "GD", label: "Grenada" },
    { value: "GT", label: "Guatemala" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HN", label: "Honduras" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "KP", label: "North Korea" },
    { value: "MK", label: "North Macedonia" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PS", label: "Palestine State" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "Sao Tome and Principe" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="bg-[var(--color-component-background)] p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-subtle)] hover:text-[var(--color-text-body)] transition-colors"
          aria-label="Close modal"
        >
          <CloseButtonIcon />
        </button>
        <h3 className="text-lg font-semibold text-[var(--color-text-heading-primary)] mb-2">
          Update payment method
        </h3>

        <div className="mb-5">
          <label
            htmlFor="country"
            className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
          >
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              name="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="appearance-none w-full px-3 py-2 text-sm border border-[var(--color-border-medium)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] bg-[var(--color-component-background)] text-[var(--color-text-body)] pr-10"
              required // Added required for country selection
            >
              {countries.map((country) => (
                <option
                  key={country.value}
                  value={country.value}
                  disabled={country.value === ""}
                >
                  {country.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-text-subtle)]">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.country && (
            <p className="text-xs text-red-500 mt-0.5">{errors.country}</p>
          )}
          <p className="text-[10px] text-[var(--color-text-subtle)] mt-1.5">
            uHired is required by law to collect applicable transaction taxes
            for purchases made in certain tax jurisdictions.
          </p>
        </div>

        <div className="mb-5 p-4 border border-[var(--color-border-medium)] rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <input
                id="cards-radio"
                type="radio"
                value=""
                name="payment-method-type"
                defaultChecked
                className="w-3.5 h-3.5 text-[var(--color-primary-action)] bg-gray-100 border-gray-300 focus:ring-[var(--color-primary-action)] dark:focus:ring-[var(--color-primary-action)] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cards-radio"
                className="ml-2 text-sm font-medium text-[var(--color-text-heading-secondary)]"
              >
                Cards
              </label>
            </div>
            <div className="flex space-x-1.5 items-center">
              <VisaIcon className="h-4" />
              <MastercardIcon className="h-4" />
              <AmexIcon className="h-4" />
              <DiscoverIcon className="h-4" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="cardName"
                className="block text-xs font-medium text-[var(--color-text-body-light)] mb-0.5"
              >
                Name on card
              </label>
              <FormInput
                type="text"
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John M. Doe"
                required
              />
              {errors.cardName && (
                <p className="text-xs text-red-500 mt-0.5">{errors.cardName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-xs font-medium text-[var(--color-text-body-light)] mb-0.5"
              >
                Card number
              </label>
              <FormInput
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength="23"
                required
              />
              {errors.cardNumber && (
                <p className="text-xs text-red-500 mt-0.5">
                  {errors.cardNumber}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-xs font-medium text-[var(--color-text-body-light)] mb-0.5"
                >
                  Expiry date
                </label>
                <FormInput
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
                {errors.expiryDate && (
                  <p className="text-xs text-red-500 mt-0.5">
                    {errors.expiryDate}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cvc"
                  className="block text-xs font-medium text-[var(--color-text-body-light)] mb-0.5"
                >
                  CVC/CVV
                </label>
                <FormInput
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                  placeholder="•••"
                  maxLength="4"
                  required
                />
                {errors.cvc && (
                  <p className="text-xs text-red-500 mt-0.5">{errors.cvc}</p>
                )}
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-subtle)] pt-1">
              This card will be stored on your account.
            </p>
            <div className="flex justify-end space-x-3 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-medium bg-[var(--color-primary-action)] text-white rounded-md hover:bg-[var(--color-primary-action-hover)] transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePaymentModal;
