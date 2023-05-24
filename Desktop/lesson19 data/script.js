"use strict";

const div = document.querySelector(".inner_data");

const dispayData = () => {
  const myDate = new Date();
  let hour = myDate.getHours();

  const nextDate = new Date("2024	, 01, 01");
  let msDay = 24 * 60 * 60 * 1000;
  let daysLast = Math.round((nextDate.getTime() - myDate.getTime()) / msDay);
  console.log(daysLast);
  let dayName = "";
  let dayStr = "" + daysLast;
  let lastNumb = parseInt(dayStr.slice(dayStr.length - 1));
  let message = "";
  let timeOfDay;

  if (hour >= 5 && hour < 12) {
    timeOfDay = "Доброе утро";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "Добрый день";
  } else if (hour >= 18 && hour < 24) {
    timeOfDay = "Добрый вечер";
  } else if (hour >= 0 && hour < 5) {
    timeOfDay = "Доброй ночи";
  }

  if (daysLast > 4 && daysLast < 21) {
    dayName = " дней";
  } else if (lastNumb == 1) {
    dayName = " день";
  } else if (lastNumb == 2 || lastNumb == 3 || lastNumb == 4) {
    dayName = " дня";
  } else {
    dayName = " дней";
  }

  const currentTime = myDate.toLocaleTimeString("en");

  let days = myDate.toLocaleString("ru", {
    weekday: "long",
  });

  days = days.toUpperCase()[0] + days.slice(1).toLowerCase();
  console.log(days);

  function oneNumber(time) {
    if (time < 10) {
      time = "0" + time;
    } else {
      time = time;
    }
    return time;
  }

  oneNumber();

  message = `
			${timeOfDay}</br>
			Сегодня: ${days}</br>
			Текущее время: ${currentTime}</br>
			До нового года осталось: ${daysLast} ${dayName}
			`;

  div.innerHTML = message;
  setTimeout(dispayData, 1000);
};

dispayData();
