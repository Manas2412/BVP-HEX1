import React from "react";

import "./Home.css";
import { FaIndustry, FaTruck, FaPills, FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import DelayedLink from "./components/DelayedLink";



function Home() {
  // Navigation handlers
  // const redirect_to_roles = () => {
  //   history.push("/roles");
  // };
  // const redirect_to_addmed = () => {
  //   history.push("/addmed");
  // };
  // const redirect_to_supply = () => {
  //   history.push("/supply");
  // };
  // const redirect_to_track = () => {
  //   history.push("/track");
  // };

  return (
    <div className="home-container">
      <h3>PHARMA</h3>
      <p className="note">
        (Note: Here <u>Owner</u> is the person who deployed the smart contract
        on the blockchain)
      </p>

      <div className="grid-container">
        {/* Register Roles Section */}
        <DelayedLink
        to="/roles"
        buttonText="Register Roles"
        icon={FaIndustry}
        imgSrc="https://cdn.dribbble.com/users/988448/screenshots/5240042/icon_cadastro_v5.gif"
        imgAlt="Register Roles"
      />


          

        {/* Order Medicines Section */}
        <DelayedLink
        to="/addmed"
        buttonText="Order Medicines"
        icon={FaPills}
        imgSrc="https://cdn.dribbble.com/users/4279575/screenshots/15172726/ezgif-5-e218fcce74d2.gif"
        imgAlt="Order Medicines"
      />

        {/* Control Supply Chain Section */}
       

        <DelayedLink
        to="/supply"
        buttonText="Control Supply Chain"
        icon={FaTruck}
        imgSrc="https://pro2-bar-s3-cdn-cf3.myportfolio.com/ec4657434c011e1a856a01752ef5f2f5/4660f53b1f7bff3a445995d3_rw_1200.gif?h=871b45bae2217a2953957135bcf4446a"
        imgAlt="Control Supply Chain"
      />
       
  

        {/* Track Medicines Section */}
        <DelayedLink
        to="/track-medicines"
        buttonText="Track Medicines"
        icon={FaSearch}
        imgSrc="https://dtlive.s3.ap-south-1.amazonaws.com/16651/Medical-Animated-GIF-Icon-Pack1-1.gif"
        imgAlt="Track Medicines"
      />
    
      </div>
    </div>
  );
}

export default Home;
