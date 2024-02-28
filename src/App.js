import Logo from "./asserts/logo.png"
import Award from "./asserts/1.png"
import Function from "./asserts/2.png"
import Products from "./asserts/3.png"
import { FaGlobe } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { IoIosGlobe } from "react-icons/io";
import './App.css';

function App() {
  return (
    <div className="App ">
      <div>
        <img src={Logo} alt="CRI logo" style={{ maxWidth: "100%", width: "700px"}} />
      </div>
      <div className="main flex-container">
        <div>
          <img src={Award} alt="Award" style={{maxWidth:"100%", width: "70%" }} />
        </div>
        <div style={{padding: "0px 20px"}}>
          <div className="text"><h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3></div>
          <div className="text"><ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul></div>
          <div>
            <img src={Function} alt="Function" style={{ width: "100%" }} />
          </div>
          <div className="text">
            <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director
              of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
              Honorable Minister of State.</p>
          </div>
        </div>
      </div>
      <div><p style={{fontWeight:"500"}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p></div>
      <div>
        <img src={Products} alt="Products" style={{ width: "80%" }} />
      </div>
      <div>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      </div>
      <hr className="rule" />
      <div>
        <p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
      </div>
      <div>
        <p>CHEMICALS & PROCESS <span className="sideline" /> POWER
          <span className="sideline" /> WATER & WASTE WATER <span className="sideline" />OILS & GAS <span className="sideline" />PHARMA <span className="sideline" />SUGARS & DISTILLERIES
          <span className="sideline" />PAPER & PULP <span className="sideline" />MARINE & DEFENCE <span className="sideline" />METAL & MINING <span className="sideline" />FOOD & BEVERAGE <span className="sideline" />PETROCHEMICAL & REFINERIES
          <span className="sideline" /> SOLAR<span className="sideline" /> BUILDING <span className="sideline" />HVAC <span className="sideline" />FIRE FIGHTING <span className="sideline" />AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className="foot">
        <ul className="footer">
          <li><FaPhone size={20} style={{ color: "red", background: "white", borderRadius: "50%", padding: "5px" }} className="list" />Toll free 1800 200 1234</li>
          <li><FaFacebook size={25} style={{ color: "white" }} className="list" />www.facebook.com/cripumps</li>
          <li><SlGlobe size={25} style={{color: "#ec3237", background: "white", borderRadius:"50%" ,border:"none" }} className="list" />www.crigroups.com</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
