'use client'
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import '../spany.css';

const Quest = () => {
  const router = useRouter();
  router.refresh();
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/calendar');
  }
  return (
    <html>
      <Head>
        <head>
          <link rel = 'stylesheet' href = 'syle.css'></link>
        </head>
      </Head>
      <div className="banner" id = 'scroll'>
        <div className="navbar">
          <img src = "./favicon.ico" className = "logo"></img>
          <ul>
            <li><a href = "/">Home</a></li>
            <li><a href = "calendar">Calendar</a></li>
            <li><a href = "opportunity">Opportunities</a></li>
          </ul>
        </div>
        <h1 id = 'H1'>Welcome to Pocket Counselor!</h1>
        <h2 id = 'H2'>Help Us Personalize Your Experience</h2>
        <form onSubmit={onSubmit}>
          <div className="box" id = 'scroll'>
            <p id = 'P1'>What Career Would You Like To Pursue?</p>
              <select>
                <option >Select</option>
                <option >Software Developer</option>
                <option >Data Analyst</option>
                <option >Registered Nurse</option>
                <option >Digital Marketer</option>
                <option >Artificial Intelligence (AI) Specialist</option>
                <option >Cybersecurity Analyst</option>
                <option >Healthcare Professional (Physician/Healthcare Worker)</option>
                <option >Environmental Scientist</option>
                <option >Financial Advisor/Analyst</option>
                <option >Electrician</option>
                <option >Teacher/Educator</option>
                <option >Counselor/Psychologist</option>
                <option >Biomedical Engineer</option>
                <option >Digital Content Creator</option>
                <option >Logistics and Supply Chain Manager</option>
              </select>
          </div>
          <div className="box" id = 'scroll'>
          <p id = 'P1'>How High Are Your Academic Aspirations?</p>
          <ul id='gar'>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
            <li><input type="radio" name="aspiration"></input></li>
          </ul>
          <ul id = 'gar1'>
            <li id = 'gargar'>1</li>
            <li id = 'gargar'>2</li>
            <li id = 'gargar'>3</li>
            <li id = 'gargar'>4</li>
            <li id = 'gargar'>5</li>
            <li id = 'gargar'>6</li>
            <li id = 'gargar'>7</li>
            <li id = 'gargar'>8</li>
            <li id = 'gargar'>9</li>
            <li id = 'gargar'>10</li>
          </ul>
          <div className="divvy"></div>
          </div>
          <div className="box" id = 'scroll'>
            <p id = 'P1'>What Level of Degree Would You Like To Pursue?</p>
            <ul id='gar3'>
                <li><p><input type="radio" name="education"></input></p>Associates</li>
                <li><p><input type="radio" name="education"></input></p>Masters</li>
                <li><p><input type="radio" name="education"></input></p>Doctorates</li>
            </ul>
          </div>
          <div className="box" id = 'garGar'>
            <p id = 'P1'>Have You Completed Your Community Service Hours?</p>
            <div id='hours'>
              <div><button id='yes' onClick={(e)=>{e.preventDefault()}}><span></span>Yes</button></div>
              <div><button id='no' onClick={(e)=>{e.preventDefault()}}><span></span>No</button></div>
              </div>
          </div>
          <div className="box" id = 'scroll'>
            <p id = 'P1'>What Extracurriculars Are You Currently In Or Have Been In?</p>
            <div id='garGarGar'>
            <div><input type="checkbox"></input>Sports Teams</div>
            <div><input type="checkbox"></input>Robotics</div>
            <div><input type="checkbox"></input>Music Or Band</div>
            <div><input type="checkbox"></input>Distributive Education Clubs of America (DECA)</div>
            <div><input type="checkbox"></input>Computer Science Clubs</div>
            <div><input type="checkbox"></input>Academic Decathalon</div>
            <div><input type="checkbox"></input>Volunteering Clubs</div>
            <div><input type="checkbox"></input>National Honor Society</div>
            <div><input type="checkbox"></input>Debate</div>
            <div><input type="checkbox"></input>Model United Nations (MUN)</div>
            <div><input type="checkbox"></input>Any Olympiad (AIME Or AMC, USACO, etc)</div>
            <div><input type="checkbox"></input>Mock Trial</div>
            <div><input type="checkbox"></input>Chess</div>
            <div><input type="checkbox"></input>Business Or Finance Clubs</div>
            <div><input type="checkbox"></input>Science/ STEM Clubs</div>
            <div>Other: <input type="text" placeholder='ex. Military' id = 'garGarGarGar'></input></div>
            </div>
          </div>
        </form>
        <div id='garGarGarGarGar'>
        <button id = 'bg' type='submit'><span></span>Submit!</button>
        </div>
      </div>
    </html>
  )
}
export default function Home() {
  return (
    <>
      <Quest/>
    </>
    
  )
}
