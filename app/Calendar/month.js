
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const LeapYear = (year) => {
  /*if((year%4 === 0 && year%100 !== 0 && year%400 !== 0) || (year%100 === 0 && year%400 === 0 ))
      return 29;
  else    
      return 28;*/
  return ((year%4 === 0 && year%100 !== 0 && year%400 !== 0) || (year%100 === 0 && year%400 === 0 ));
};
const FebDays = (year) =>{
  return  LeapYear(year)? 29: 28;
};


let calendar = document.querySelector('.calendar');
let monthChoose = document.querySelector('#month-choose');
const DayTxtForm = document.querySelector('.day-text-form');
const TimeForm = document.querySelector('.time-form');
const DateForm = document.querySelector('.date-form');

monthChoose.onclick = () => {
  monthNames.classList.remove('hideonce');
  monthNames.classList.remove('hide');
  monthNames.classList.add('show');
  DayTxtForm.classList.remove('showtime');
  DayTxtForm.classList.add('hidetime');
  TimeForm.classList.remove('showtime');
  TimeForm.classList.add('hideTime');
  DateForm.classList.remove('showtime');
  DateForm.classList.add('hideTime');
};

const MakeCalendar = (month, year) =>{
  let caldays = document.querySelector('.calendar-days');
  caldays.innerHTML = '';
  let calheadyear = document.querySelector('#year');
  let monthDays = [31, FebDays(year), 31,30, 31, 30, 31, 31, 30, 31,30, 31];
  let currDate = new Date();
  monthChoose.innerHTML = monthNames[month];
  calheadyear.innerHTML = year;
  let FDay = new Date(year, month);

  for(let i = 0; i < monthDays[month] + FDay.getDay() - 1; i++){
      let Day = document.createElement('div');
      if(i >= FDay.getDay()){
          Day.innerHTML = i - FDay.getDay() + 1;
          if(i - FDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()){
              Day.classList.add('current-date');/*prob?*/
          }
      }
      caldays.appendChild(Day);
  }
};

let monthLi = calendar.querySelector('.months-list');
monthNames.forEach((e, index) => { /*problemmmmmm*/
  let month = document.createElement('div');
  month.innerHTML = `<div>${e}</div>`; /*changed code here*/
  monthLi.append(month);
  month.onclick = () => {
      currentMonth.value = index;
      MakeCalendar(currentMonth.value, currentYear.value);
      monthLi.classList.replace('show','hide');
      DayTxtForm.classList.remove('hideTime');
      DayTxtForm.classList.add('showtime');
      TimeForm.remove('hideTime');
      TimeForm.add('showtime');
      DateForm.remove('hideTime');
      DateForm.add('showtime');
  };
});

(function () {
  monthLi.classList.add('hideonce');
})();

document.querySelector('#p-year').onclick = () => {
  --currentYear.value;
  MakeCalendar(currentMonth.value, currentYear.value);
};

document.querySelector('#next-year').onclick = () => {
  ++currentYear.value;
  MakeCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
MakeCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-form');
const todayShowDate = document.querySelector('.date-form');

const currshowDate = new Date();
const showCurrentDateOption = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
const currentDateFormate = new Intl.DateTimeFormat(
  'en-US',
  showCurrentDateOption
).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
  const timer = new Date();
  const option = {
      hour: 'numeric',
      minute: 'numeric',
      //second: 'numeric',
  };
  const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
  let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
  )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
  )}`;
  todayShowTime.textContent = formateTimer;
}, 1000);
