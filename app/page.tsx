import Head from 'next/head';
import './spany.css'

export default function Home() {
  return (
    <html>
      <Head>
        <head>
          <link href = "global.css" rel="stylesheet" type="text/css"></link>
          
        </head>
      </Head>
      <body>
        <div className="banner" id="backGROUND">
          <div className="navbar" id = 'n1'>
            <img src = "./favicon.ico" className = "logo"></img>
            <ul>
            <li><a href = "/">Home</a></li>
                  <li><a href = "/calendar">Calendar</a></li>
                  <li><a href = "/opportunity">Opportunities</a></li>
            </ul>
          </div>
          <div className="content">
            <h1>PLAN YOUR FUTURE</h1>
            <p>Sign up to unlock your future through Pocket Counselor for free!</p>
            <a href = "login"><button type="button"><span></span>Log In</button></a>
            <a href = "signUp"><button type="button"><span></span>Sign Up</button></a>
          </div>
        </div>
      </body>
    </html>
  )
}
