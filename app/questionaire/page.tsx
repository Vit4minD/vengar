'use client'
import { useRouter } from 'next/navigation';

const Quest = () => {
  const router = useRouter();
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
  }
  return (
    <>
      <h1>Welcome to Vengar!</h1>
      <h2>Help Us Personalize Your Experience</h2>
      <div>
        <form onSubmit={onSubmit}>
            <p>What Career Would You Like To Pursue?</p>
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
            <p>How High Are Your Academic Aspirations?</p>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <input type="radio" name="aspiration"></input>
              <p>1 2 3 4 5 6 7 8 9 10</p>
            <p>What Level of Degree Would You Like To Pursue?</p>
              <input type="radio" name="education"></input>
              <input type="radio" name="education"></input>
              <input type="radio" name="education"></input>
              <p>1 2 3</p>
            <p>Have You Completed Your Community Service Hours?</p>
              <input type="radio" name="volunteer"></input>
              <input type="radio" name="volunteer"></input>
              <p>Yes No</p>
            <p>What Extracurriculars Are You Currently In Or Have Been In?</p>
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
            <button type='submit' >Submit!</button>
        </form>
      </div>
    </>
    )
}
export default function Home() {
  return (
    <>
      <Quest/>
    </>
    
  )
}
