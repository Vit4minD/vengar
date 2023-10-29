//import Firebase from '@/firebase/config'
//import Casa from '../casa/Casa'

//const firebase = Firebase

import './month.js'; 
import './style.css';
import Head from 'next/head';
export default function Home() {
  return (
    <>
        {/* <html lang="en">
        <Head>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calendar</title>
            <link rel ="stylesheet" href = "style.css"></link>
            <script src = "month.js" defer></script>
        </head>
        </Head>
        <body>
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
            
        </body>
        
        </html> */}
        <html lang="en">
            <Head>
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>CALENDAR</title>
                <link rel="stylesheet" href="style.css"></link>
                <script src="month.js" defer></script>
            </head>
            </Head>
            <body>
                <div className="contianer">
                <div className="calendar">
                    <div className="calendar-header">
                    <span className="month-picker" id="month-picker"> May </span>
                    <div className="year-picker" id="year-picker">
                        <span className="year-change" id="pre-year">
                        <pre>&lt;</pre>
                        </span>
                        <span id="year">2020 </span>
                        <span className="year-change" id="next-year">
                        <pre>&gt;</pre>
                        </span>
                    </div>
                    </div>
            
                    <div className="calendar-body">
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
                    <div className="date-time-formate">
                    <div className="day-text-formate">TODAY</div>
                    <div className="date-time-value">
                        <div className="time-formate">02:51:20</div>
                        <div className="date-formate">23 - july - 2022</div>
                    </div>
                    </div>
                    <div className="month-list"></div>
                </div>
                </div>
            </body>
        </html>
    </>
  )
}