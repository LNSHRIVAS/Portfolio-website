import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from './resume3.pdf';
function Services() {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href= {Resume} download>
           <button className="button s-button">Download CV</button>
        </a>
        
         <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
         </div>
        <div className="cards">
           <div style={{ left: "14rem"}}>
            <Card 
             emoji = {HeartEmoji}
             heading = {'Design'}
             details = {"Figma, Sketch, Photoshop, Adobe"}
            
            />

           </div>

        <div style={{ top: "12rem", left: "-4rem"}}>
            <Card 
             emoji = {Glasses}
             heading = {'Developer'}
             details = {"Html, Css, JavaScript, React"}
            
            />

        </div>

        <div style={{ top: "19rem", left: "12rem"}}>
           <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          

        </div>

        </div>
    </div>
  )
}

export default Services