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
    const events = [
       
    ];
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
                const dayNumber = i - FDay.getDay() + 1;
                Day.innerHTML = dayNumber;
                const eventForDay = events.find(event => event.date === `${year}-${month + 1}-${dayNumber}`);
            if (eventForDay) {
                // Add the event to the day's content
                const eventElement = document.createElement('div');
                eventElement.className = 'event';
                eventElement.textContent = eventForDay.title;
                Day.appendChild(eventElement);
            }

            if (dayNumber === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                Day.classList.add('current-date');
            }
            }
            if (caldays) caldays.appendChild(Day);
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
            monthLi?.classList.replace('show','hide');
            DayTxtForm.classList.remove('hideTime');
            DayTxtForm.classList.add('showtime');
            TimeForm.classList.remove('hideTime');
            TimeForm.classList.add('showtime');
            DateForm.classList.remove('hideTime');
            DateForm.classList.add('showtime');
        };
      } );
      
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
      const makeEvent = document.getElementById("makeEvent");
      const addEvent = document.getElementById("addEvent");
      const exitEvent = document.getElementById("exitEvent")
      makeEvent?.addEventListener("click",() =>{
        if(addEvent!=null){
            addEvent.style.display = "block";
            setTimeout(function() {
                addEvent.style.opacity = '1'; // Fade in the popup
            }, 10);
        }
      });
      exitEvent?.addEventListener("click",()=>{
        if(addEvent!=null){
            addEvent.style.transition = "opacity .3s"
            addEvent.style.opacity = '0';
            setTimeout(function() {
                addEvent.style.display = "none"; // Fade in the popup
            }, 450);

        }
      })
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
                        <div className='addEvent' id='addEvent'>
                        <div className='exitEvent'><a  id='exitEvent'>X</a></div>
                            Add Event
                            <div>
                                <form>
                                    <p className='date'>Date:<input type="date"></input></p>
                                    <p className='time'>Time:<input type="time"></input></p>
                                    <p className='description' >Desc:<input placeholder='Description' type="text"></input></p>
                                </form>
                            </div>
                        </div>
                        <div className="months-list"></div>
                        {/* <div className="event"></div> */}
                    </div>
                </div>
            </div>
        </body>
        
        </html> 
    </>
  )
}