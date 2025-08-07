import React from "react";
import { useNavigate } from 'react-router-dom';
const Section1 = () => {
    const navigate = useNavigate();
  return (
   <div>
    <div>
        <h1>Welcome to DENAURLEN</h1>
        <h3 className="h31">Gamify with Smart Savvy Social Network</h3>
      </div>
      <div className="grid1">
        <div >
        <span className="text1">
          <span className="bord">1 </span>
          
          Activity to infinity</span>
          <br/>
          <br/>
          <br />
          <img
            src="https://flourishing-puffpuff-ba46c8.netlify.app/static/media/image2.ba503bcfd4876cf100b7325e7c3628ba.svg"
            alt="1stimg" style={{marginRight:"10px"}}/>
          </div>
          <div >
          <span className="text1">
            <span className="bord">2 </span>
             One Platform </span>
          </div>
          <br />
          <br />
          <br />
          <img
            src="https://flourishing-puffpuff-ba46c8.netlify.app/static/media/image3.996d18ef7ce61d67cf9bbe59b54afcf2.svg"
            width={"450px"} alt="2nd" className="sec"
          />
        
        <div>
        <span className="text1">
          <span className="bord">3 </span>
          Real you, rewards for you!</span>
          <br />
          <br />
          <br />
          <img
            src="https://flourishing-puffpuff-ba46c8.netlify.app/static/media/image1.76f1dd5531d893e697230ca8b9d71f79.svg"
            alt="3rdimg"
          />
        </div>
    </div>
    <button className="button" onClick={()=>{navigate("/section2")}}>Get started</button>
  </div>
  );
};

export default Section1;
