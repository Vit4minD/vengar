//import Firebase from '../firebase/config'
//import Casa from './casa/Casa'

//const firebase = Firebase

export default function Home() {
  return (
    <>
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Calendar</title>
            <link rel ="stylesheet" href = "style.css"></link>
            <script src = "month.js" defer></script>
        </head>
        <body>
            <div className = "container">
                <div className="calendar">
                    <div className="calendar-header">
                        <span className="month-choose" id="month-choose"> Oct </span>
                        <div className="year-chooser" id = "year-picker">
                            <span className="year-change" id="p-year">
                                <pre>_</pre>
                            </span>
                            <span id= "year">2023 </span>
                            <span className = "year-change" id = "next-year">
                                <pre>_</pre>
                            </span>
                        </div>
                    </div>
                    <div className = "calendar-bod">
                        <div className="calendar week days">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div className="calendar-days"></div>
                    </div>
                    <div className="calendar-footer"></div>
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
        </html>
    </>
  )
}


