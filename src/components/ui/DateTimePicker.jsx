// src/components/ui/DateTimePicker.jsx
import React, { useState, useEffect } from "react";

const ChevronLeftIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

const DateTimePicker = ({ initialDateTime, onDateTimeChange }) => {
  const [currentDisplayDate, setCurrentDisplayDate] = useState(
    initialDateTime ? new Date(initialDateTime) : new Date()
  );
  const [selectedDate, setSelectedDate] = useState(
    initialDateTime ? new Date(initialDateTime) : new Date()
  );

  const [hour, setHour] = useState(
    initialDateTime ? new Date(initialDateTime).getHours() % 12 || 12 : 9
  ); // Default to 9 AM
  const [minute, setMinute] = useState(
    initialDateTime ? new Date(initialDateTime).getMinutes() : 0
  );
  const [period, setPeriod] = useState(
    initialDateTime
      ? new Date(initialDateTime).getHours() >= 12
        ? "PM"
        : "AM"
      : "AM"
  );

  const [isHourValid, setIsHourValid] = useState(true);
  const [isMinuteValid, setIsMinuteValid] = useState(true);

  useEffect(() => {
    // When selectedDate, hour, minute, or period changes, call onDateTimeChange
    const newSelectedDateTime = new Date(selectedDate);
    let currentHour = parseInt(hour, 10);
    if (period === "PM" && currentHour < 12) currentHour += 12;
    if (period === "AM" && currentHour === 12) currentHour = 0; // Midnight case

    newSelectedDateTime.setHours(currentHour, parseInt(minute, 10), 0, 0);
    onDateTimeChange(newSelectedDateTime);
  }, [selectedDate, hour, minute, period, onDateTimeChange]);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]; // Shortened days
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today for date comparison

  const renderCalendarDays = () => {
    const year = currentDisplayDate.getFullYear();
    const month = currentDisplayDate.getMonth();
    const daysInCurrentMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysArray = [];

    // Padding for previous month's days
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(
        <div key={`empty-prev-${i}`} className="p-1.5 text-center"></div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate &&
        date.getTime() ===
          new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
          ).getTime();
      const isToday = date.getTime() === today.getTime();

      daysArray.push(
        <div key={day} className="p-0.5">
          <button
            onClick={() => setSelectedDate(date)}
            className={`w-7 h-7 text-xs rounded-full flex items-center justify-center transition-colors duration-150
              ${
                isSelected
                  ? "bg-[var(--color-primary-action)] text-white font-semibold"
                  : "hover:bg-[var(--color-primary-lighter)]"
              }
              ${
                isToday && !isSelected
                  ? "text-[var(--color-primary-action)] font-medium border border-[var(--color-primary-action)] border-opacity-50"
                  : "text-[var(--color-text-body)]"
              }
              ${
                date < today
                  ? "text-[var(--color-text-subtle)] opacity-60 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            disabled={date < today && !isToday} // Disable past dates except today
          >
            {day}
          </button>
        </div>
      );
    }
    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentDisplayDate(
      new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth() - 1,
        1
      )
    );
  };

  const handleNextMonth = () => {
    setCurrentDisplayDate(
      new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth() + 1,
        1
      )
    );
  };

  const handleHourChange = (e) => {
    let val = e.target.value;
    if (val === "" || (parseInt(val, 10) >= 1 && parseInt(val, 10) <= 12)) {
      setHour(val === "" ? "" : parseInt(val, 10));
      setIsHourValid(true);
    } else {
      setIsHourValid(false);
    }
    if (val.length <= 2) setHour(val); // Allow typing up to 2 digits
  };
  const handleMinuteChange = (e) => {
    let val = e.target.value;
    if (val === "" || (parseInt(val, 10) >= 0 && parseInt(val, 10) <= 59)) {
      setMinute(val === "" ? "" : parseInt(val, 10));
      setIsMinuteValid(true);
    } else {
      setIsMinuteValid(false);
    }
    if (val.length <= 2) setMinute(val);
  };

  const formatTimeValue = (val) => val.toString().padStart(2, "0");

  return (
    <div className="p-3 bg-[var(--color-component-background)] rounded-lg shadow-md border border-[var(--color-border-light)] border-opacity-75 w-full max-w-xs mx-auto">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <button
          onClick={handlePrevMonth}
          className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-[var(--color-text-body-light)]"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
        <div className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
          {monthNames[currentDisplayDate.getMonth()]}{" "}
          {currentDisplayDate.getFullYear()}
        </div>
        <button
          onClick={handleNextMonth}
          className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-[var(--color-text-body-light)]"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0.5 text-center text-xs text-[var(--color-text-subtle)] mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-medium p-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">{renderCalendarDays()}</div>

      {/* Time Input Section */}
      <div className="mt-4 pt-3 border-t border-[var(--color-border-light)] border-opacity-50">
        <label className="block text-xs font-medium text-[var(--color-text-subtle)] mb-1.5 text-center">
          Select Time:
        </label>
        <div className="flex items-center justify-center space-x-1.5">
          <input
            type="number"
            value={hour === "" ? "" : formatTimeValue(hour)}
            onChange={handleHourChange}
            onBlur={(e) => {
              const val = parseInt(e.target.value, 10);
              if (isNaN(val) || val < 1 || val > 12) setIsHourValid(false);
              else setIsHourValid(true);
              if (!isNaN(val) && val >= 1 && val <= 12) setHour(val);
              else if (hour === "") setIsHourValid(false);
            }}
            placeholder="HH"
            className={`w-12 text-center p-1.5 text-sm border rounded-md shadow-sm bg-[var(--color-component-background)] text-[var(--color-text-body)] focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] ${
              isHourValid
                ? "border-[var(--color-border-medium)]"
                : "border-red-500 ring-1 ring-red-500"
            }`}
          />
          <span className="text-sm font-semibold text-[var(--color-text-body)]">
            :
          </span>
          <input
            type="number"
            value={minute === "" ? "" : formatTimeValue(minute)}
            onChange={handleMinuteChange}
            onBlur={(e) => {
              const val = parseInt(e.target.value, 10);
              if (isNaN(val) || val < 0 || val > 59) setIsMinuteValid(false);
              else setIsMinuteValid(true);
              if (!isNaN(val) && val >= 0 && val <= 59) setMinute(val);
              else if (minute === "") setIsMinuteValid(false);
            }}
            placeholder="MM"
            className={`w-12 text-center p-1.5 text-sm border rounded-md shadow-sm bg-[var(--color-component-background)] text-[var(--color-text-body)] focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] ${
              isMinuteValid
                ? "border-[var(--color-border-medium)]"
                : "border-red-500 ring-1 ring-red-500"
            }`}
          />
          <button
            onClick={() => setPeriod(period === "AM" ? "PM" : "AM")}
            className="px-2 py-1.5 text-xs font-medium rounded-md border border-[var(--color-border-medium)] bg-slate-50 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-[var(--color-text-body)]"
          >
            {period}
          </button>
        </div>
        {(!isHourValid || !isMinuteValid) && (
          <p className="text-xs text-red-500 text-center mt-1">
            Please enter a valid time.
          </p>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
