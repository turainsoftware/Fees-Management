const students = [
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: false,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
];

const fullData = {
  series: [
    {
      name: "Fees Received",
      type: "column",
      data: [600, 400, 500, 450, 700, 300, 550, 400, 650, 800, 450],
    },
    {
      name: "Students",
      type: "line",
      data: [42, 25, 37, 22, 43, 27, 39, 22, 31, 50, 20],
    },
  ],
  labels: [
    "1 Jan",
    "2 Jan",
    "3 Jan",
    "4 Jan",
    "5 Jan",
    "6 Jan",
    "7 Jan",
    "8 Jan",
    "9 Jan",
    "10 Jan",
    "11 Jan",
  ],
};

const mobileData = {
  series: [
    {
      name: "Fees Received",
      type: "column",
      data: [450, 400, 250, 300],
    },
    {
      name: "Students",
      type: "line",
      data: [42, 25, 37, 22],
    },
  ],
  labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan"],
};

const feesData = [
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "green", // Use 'green' for received, 'red' for pending
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "red",
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "green",
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "red",
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "green",
  },
];

const notifications = [
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  {
    studentName: "Alex",
    amount: "1200",
    time: "Monday 10:00 am",
    isRead: true,
  },
  {
    studentName: "John",
    amount: "650",
    time: "Tuesday 2:00 pm",
    isRead: false,
  },
  {
    studentName: "David",
    amount: "700",
    time: "Wednesday 11:10 am",
    isRead: true,
  },
  {
    studentName: "Micheal",
    amount: "1000",
    time: "Thursday 1:00 pm",
    isRead: false,
  },
  {
    studentName: "Sara",
    amount: "950",
    time: "Saturday 1:12 pm",
    isRead: true,
  },
  {
    studentName: "Emily",
    amount: "1100",
    time: "Sunday 8:00 am",
    isRead: false,
  },
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  {
    studentName: "Mousin",
    amount: "800",
    time: "Friday 3:12 pm",
    isRead: false,
  },
  // Add more notification objects as needed
];

const boardOptions = [
  { label: "CBSE", value: "CBSE" },
  { label: "WBBSE", value: "WBBSE" },
  { label: "ICSE", value: "ICSE" },
  { label: "ISC", value: "ISC" },
];

export {
  students,
  mobileData,
  fullData,
  feesData,
  notifications,
  boardOptions,
};
