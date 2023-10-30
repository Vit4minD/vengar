//import Firebase from '@/firebase/config'
//import Casa from '../casa/Casa'

//const firebase = Firebase
'use client'
import React from 'react';
import './style.css';
import Head from 'next/head';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December',
        
      ];
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
      const LeapYear = (year: number) => {
        /*if((year%4 === 0 && year%100 !== 0 && year%400 !== 0) || (year%100 === 0 && year%400 === 0 ))
            return 29;
        else    
            return 28;*/
        return ((year%4 === 0 && year%100 !== 0 && year%400 !== 0) || (year%100 === 0 && year%400 === 0 ));
      };
      const FebDays = (year: number) =>{
        return  LeapYear(year)? 29: 28;
      };
      
      
      let calendar = document.querySelector('.calendar');
      let monthChoose = document.querySelector('#month-choose');
      const DayTxtForm = document.querySelector('.day-text-form');
      const TimeForm = document.querySelector('.time-form');
      const DateForm = document.querySelector('.date-form');
      if(monthChoose!=null)
        monthChoose.onclick = () => {
            monthLi.classList.remove('hideonce');
            monthLi.classList.remove('hide');
            monthLi.classList.add('show');
            DayTxtForm.classList.remove('showtime');
            DayTxtForm.classList.add('hideTime');
            TimeForm.classList.remove('showtime');
            TimeForm.classList.add('hideTime');
            DateForm.classList.remove('showtime');
            DateForm.classList.add('hideTime');
        };
      
      const MakeCalendar = (month: number, year: number) =>{
        let caldays = document.querySelector('.calendar-days');
        if(caldays!= null)
            caldays.innerHTML = '';
        let calheadyear = document.querySelector('#year');
        let monthDays = [31, FebDays(year), 31,30, 31, 30, 31, 31, 30, 31,30, 31];
        let currDate = new Date();
        if(monthChoose)
            monthChoose.innerHTML = monthNames[month];
        if(calheadyear!= null)
            calheadyear.innerHTML = year;
        let FDay = new Date(year, month);
      
        for(let i = 0; i <= monthDays[month] + FDay.getDay() - 1; i++){
            let Day = document.createElement('div');
            if(i >= FDay.getDay()){
                Day.innerHTML = i - FDay.getDay() + 1;
                if(i - FDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()){
                    Day.classList.add('current-date');/*prob?*/
                }
            }
            if(caldays)
                caldays.appendChild(Day);
        }
      };
      
      let monthLi = calendar != null ? calendar.querySelector('.months-list'): null;
      monthNames.forEach((e, index) => { /*problemmmmmm*/
        let month = document.createElement('div');
        month.innerHTML = `<div>${e}</div>`; /*changed code here*/

        monthLi?.append(month);
        month.onclick = () => {
            currentMonth.value = index;
            MakeCalendar(currentMonth.value, currentYear.value);
            monthLi.classList.replace('show','hide');
            DayTxtForm.classList.remove('hideTime');
            DayTxtForm.classList.add('showtime');
            TimeForm.classList.remove('hideTime');
            TimeForm.classList.add('showtime');
            DateForm.classList.remove('hideTime');
            DateForm.classList.add('showtime');
        };
      });
      
      (function () {
        if(monthLi != null)
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
    }, []);
      
  return (
    
    <>
        <html lang="en">
        <Head>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calendar</title>
            <link rel ="stylesheet" href = "style.css"></link>
        </head>
        </Head>
        <body>
            <div className="banner">
                <div className="navbar">
                    <img src = "./favicon.ico" className = "logo"></img>
                    <ul>
                        <li><a href = "login">Home</a></li>
                        <li><a href = "login">Home</a></li>
                        <li><a href = "#">Home</a></li>
                    </ul>
                </div>
                <div className = "container">
                    <div className="calendar">
                        <div className="calendar-header">
                            <span className="month-choose" id="month-choose"> Oct </span>
                            <div className="year-chooser" id = "year-chooser">
                                <span className="year-change" id="p-year">
                                    <pre>&lt;</pre>
                                </span>
                                <span id= "year">2023</span>
                                <span className = "year-change" id = "next-year">
                                    <pre>&gt;</pre>
                                </span>
                            </div>
                        </div>
                        <div className = "calendar-bod">
                            <div className="calendar-week-days">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                            </div>
                            <div className="calendar-days">
                            </div>
                        </div>
                        <div className="calendar-footer">
                        </div>
                        <div className = "date-time-form"> 
                            <div className="day-text-form">Today</div>
                            <div className="date-time-val">
                                <div className="time-form">09:59</div>
                                <div className="date-form">October - 24 - 2023</div>
                            </div>
                        </div>
                        <div className="months-list"></div>
                    </div>
                </div>
            </div>
        </body>
        
        </html> 
    </>
  )
}


{/* 'use client'
import { useEffect } from 'react';
import './style.css';
import Head from 'next/head';
import React from 'react';
export default function Home() {
//   useEffect(() => {
//     const isLeapYear = (year: number) => {
//         return (
//           (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
//           (year % 100 === 0 && year % 400 === 0)
//         );
//       };
//       const getFebDays = (year: number) => {
//         return isLeapYear(year) ? 29 : 28;
//       };
//       let calendar = document.querySelector('.calendar');
//       const month_names = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//       ];
//       let month_picker = document.querySelector('#month-picker');
//       const dayTextFormate = document.querySelector('.day-text-formate');
//       const timeFormate = document.querySelector('.time-formate');
//       const dateFormate = document.querySelector('.date-formate');
//       if(month_picker!=null)
//         month_picker.onclick = () => {
//             month_list.classList.remove('hideonce');
//             month_list.classList.remove('hide');
//             month_list.classList.add('show');
//             dayTextFormate.classList.remove('showtime');
//             dayTextFormate.classList.add('hidetime');
//             timeFormate.classList.remove('showtime');
//             timeFormate.classList.add('hideTime');
//             dateFormate.classList.remove('showtime');
//             dateFormate.classList.add('hideTime');
//         };
      
//       const generateCalendar = (month, year) => {
//         let calendar_days = document.querySelector('.calendar-days');
//         if(calendar_days !=null)
//             calendar_days.innerHTML = '';
//         let calendar_header_year = document.querySelector('#year');
//         let days_of_month = [
//           31,
//           getFebDays(year),
//           31,
//           30,
//           31,
//           30,
//           31,
//           31,
//           30,
//           31,
//           30,
//           31,
//         ];
        
//         let currentDate = new Date();
//         if(month_picker)
//             month_picker.innerHTML = month_names[month];
//         if(calendar_header_year)
//             calendar_header_year.innerHTML = year;
        
//         let first_day = new Date(year, month);
      
      
//         for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
       
//           let day = document.createElement('div');
      
//           if (i >= first_day.getDay()) {
//             day.innerHTML = i - first_day.getDay() + 1;
    
//             if (i - first_day.getDay() + 1 === currentDate.getDate() &&
//               year === currentDate.getFullYear() &&
//               month === currentDate.getMonth()
//             ) {
//               day.classList.add('current-date');
//             }
//           }
//           if(calendar_days)
//             calendar_days.appendChild(day);
//         }
//       };
      
//       let month_list = calendar != null ? calendar.querySelector('.month-list') : null;
//       month_names.forEach((e, index) => {
//         let month = document.createElement('div');
//         month.innerHTML = `<div>${e}</div>`;
      
//         month_list?.append(month);
//         month.onclick = () => {
//           currentMonth.value = index;
//           generateCalendar(currentMonth.value, currentYear.value);
//           month_list.classList.replace('show', 'hide');
//           dayTextFormate.classList.remove('hideTime');
//           dayTextFormate.classList.add('showtime');
//           timeFormate.classList.remove('hideTime');
//           timeFormate.classList.add('showtime');
//           dateFormate.classList.remove('hideTime');
//           dateFormate.classList.add('showtime');
//         };
//       });
      
//       (function () {
//         if(month_list !=null)
//             month_list.classList.add('hideonce');
//       })();
//       if(document.querySelector('#pre-year') != null)
//         document.querySelector('#pre-year').onclick = () => {
//             --currentYear.value;
//             generateCalendar(currentMonth.value, currentYear.value);
//         };
//       if(document.querySelector('#pre-year') != null)
//         document.querySelector('#next-year').onclick = () => {
//             ++currentYear.value;
//             generateCalendar(currentMonth.value, currentYear.value);
//         };
      
//       let currentDate = new Date();
//       let currentMonth = { value: currentDate.getMonth() };
//       let currentYear = { value: currentDate.getFullYear() };
//       generateCalendar(currentMonth.value, currentYear.value);
    
//       const todayShowTime = document.querySelector('.time-formate');
//       const todayShowDate = document.querySelector('.date-formate');
      
//       const currshowDate = new Date();
//       const showCurrentDateOption = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         weekday: 'long',
//       };
//       const currentDateFormate = new Intl.DateTimeFormat(
//         'en-US',
//         showCurrentDateOption
//       ).format(currshowDate);
//       if(todayShowDate)
//         todayShowDate.textContent = currentDateFormate;
//       setInterval(() => {
//         const timer = new Date();
//         const option = {
//           hour: 'numeric',
//           minute: 'numeric',
//           second: 'numeric',
//         };
//         const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
//         let time = `${`${timer.getHours()}`.padStart(
//           2,
//           '0'
//         )}:${`${timer.getMinutes()}`.padStart(
//           2,
//           '0'
//         )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
//         if(todayShowTime)
//             todayShowTime.textContent = formateTimer;
//       }, 1000);
//     })
//   return (
//     <>
//         <html lang="en">
//             <Head>
//             <head>
//                 <meta charSet="UTF-8" />
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <title>CALENDAR</title>
//                 <link rel="stylesheet" href="style.css"></link>
//             </head>
//             </Head>
//             <body>
//                 <div className="contianer">
//                 <div className="calendar">
//                     <div className="calendar-header">
//                     <span className="month-picker" id="month-picker"> May </span>
//                     <div className="year-picker" id="year-picker">
//                         <span className="year-change" id="pre-year">
//                         <pre>&lt;</pre>
//                         </span>
//                         <span id="year">2020 </span>
//                         <span className="year-change" id="next-year">
//                         <pre>&gt;</pre>
//                         </span>
//                     </div>
//                     </div>
            
//                     <div className="calendar-body">
//                     <div className="calendar-week-days">
//                         <div>Sun</div>
//                         <div>Mon</div>
//                         <div>Tue</div>
//                         <div>Wed</div>
//                         <div>Thu</div>
//                         <div>Fri</div>
//                         <div>Sat</div>
//                     </div>
//                     <div className="calendar-days">
//                     </div>
//                     </div>
//                     <div className="calendar-footer">
//                     </div>
//                     <div className="date-time-formate">
//                     <div className="day-text-formate">TODAY</div>
//                     <div className="date-time-value">
//                         <div className="time-formate">02:51:20</div>
//                         <div className="date-formate">23 - july - 2022</div>
//                     </div>
//                     </div>
//                     <div className="month-list"></div>
//                 </div>
//                 </div>
//             </body>
//         </html>
//     </>
//   )
// }
 */}
