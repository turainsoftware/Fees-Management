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
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const formatDate=`${monthNames[month-1]}, ${year}`;
  return formatDate;
}

export { getGreetingBasedOnTime, formatYearMonth };
