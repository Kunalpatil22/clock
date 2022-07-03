// HTML elements
const rootEl = document.getElementById("root");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

// months: array to display on the screen
const months = [
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

// function to display time on the screen
function displayDate() {
  const date = new Date();

  const current_date = {
    date: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };

  dateEl.innerHTML = `${current_date.date} ${current_date.month} ${current_date.year}`;
  setTimeout(displayDate, 1000);
}

// function to display time on the screen
function displayTime() {
  const date = new Date();
  const current_time = {
    hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    minutes:
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    seconds:
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
  };

  timeEl.innerHTML = `${current_time.hours}:${current_time.minutes}:${current_time.seconds}`;
  setTimeout(displayTime, 1000);
}

displayDate();
displayTime();
