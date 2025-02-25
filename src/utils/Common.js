function getGreetingBasedOnTime() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours(); // Get the current hour (0-23)

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function formatYearMonth({ year, month }) {
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
  const formatDate = `${monthNames[month - 1]}, ${year}`;
  return formatDate;
}

function formatDate({ isoString }) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

const checkIfBefore = ({ year, month }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if (year < currentYear || (year === currentYear && month <= currentMonth)) {
    return true;
  } else {
    return false;
  }
};

function isAdvanceDate({ year, month, paymentDate }) {
  const checkDate = new Date(year, month - 1, 1);
  const payment = new Date(paymentDate);
  return checkDate > payment;
}

const formatTime = (timeString) => {
  return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const formatMonth = (monthNum) => {
  return new Date(2000, monthNum - 1, 1).toLocaleString("default", {
    month: "long",
  });
};

// Datas
const dayOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

export {
  formatTime,
  formatMonth,
  getGreetingBasedOnTime,
  formatYearMonth,
  formatDate,
  checkIfBefore,
  isAdvanceDate,
  dayOptions,
};
