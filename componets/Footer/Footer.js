"use client"

import React, { useEffect, useState } from 'react';
import './Footer.css'; // Ensure your CSS file is properly linked
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = ({host}) => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(footerData)
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  return (
    <footer>
      <div className="footer-content">
        <div  className="footer-partition">
          <div  className="footer-sub-partition">
            <h3 style={{ color: "white", fontSize: "22px", lineHeight: "1.2", marginTop:"12", marginBottom:"11px"}}>İstanbul Branch</h3>
            <p>Kılıçali Paşa, Meclis-i Mebusan Cd. No:29, 34425, Beyoğlu/İstanbul, Türkiye</p>
          </div>
          <div  className="footer-sub-partition">
            <h3 style={{ color: "white", fontSize: "22px", lineHeight: "1.2", marginTop:"12", marginBottom:"11px"}}>Dubai Branch</h3>
            <p>Latifa Tower – Trade Centre – Trade Centre 1 – Dubai – United Arab Emirates</p>
          </div>
        </div>
        <div  className="footer-partition">
          <div  className="footer-sub-partition">
            <p>Office Address: 2nd floor near bahadurgarh city metro station piller no 839 above Punjab national bank bahadurgarh -124507</p>
          </div>
          <div  className="footer-sub-partition">
            <p>Mumbai Branch : Office no- 606, Plot no 13, Shah Prima, opp. Glomax Mall, Sector 2, Kharghar, Navi Mumbai, Maharashtra 410210, India</p>
          </div>
        </div>
        <div  className="footer-partition">
          <div  className="footer-sub-partition">
            <p>Phone: 8571964292<br/>
            Email: (For Admission or Exam related) <br/>
            Admin@maritimemarvelsacademy.in<br/>
            (For Job Related) career@maritimemarvelsacademy.in<br/>
            info@maritimemarvelsacademy.in</p>
          </div>
        </div>      
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div style={{marginBottom:"0px", marginTop:"0px", fontSize:"15px"}}>{data.footerNote}</div>
          <div className='footer-social'>
            <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
              style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                textDecoration: "none"
              }}
              href={host}
              target="_blank"
              rel="noopener noreferrer">
              <span className="social-icon">
                <CiFacebook style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
              </span>
              <span className="social-circle"></span>
            </a>
            <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
              style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                textDecoration: "none"
              }}
              href={host}
              target="_blank"
              rel="noopener noreferrer">
              <span className="social-icon">
                <CiTwitter style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
              </span>
              <span className="social-circle"></span>
            </a>
            <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
              style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                textDecoration: "none"
              }}
              href={host}
              target="_blank"
              rel="noopener noreferrer">
              <span className="social-icon">
                <FaInstagram style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
              </span>
              <span className="social-circle"></span>
            </a>
            <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
              style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                textDecoration: "none"
              }}
              href={host}
              target="_blank"
              rel="noopener noreferrer">
              <span className="social-icon">
                <AiOutlineYoutube style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
              </span>
              <span className="social-circle"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

let data = {
  "branches": [
    {
      "title": "İstanbul Branch",
      "addressLines": [
        "Kılıçali Paşa, Meclis-i Mebusan Cd. No:29, 34425",
        "Beyoğlu/İstanbul, Türkiye"
      ]
    },
    {
      "title": "Dubai Branch",
      "addressLines": [
        "Latifa Tower – Trade Centre – Trade Centre 1 – Dubai – United Arab Emirates"
      ]
    }
  ],
  "contacts": [
    "Office Address: 2nd floor near bahadurgarh city metro station piller no 839 above Punjab national bank bahadurgarh -124507",
    "Mumbai Branch: Office no- 606, Plot no 13, Shah Prima, opp. Glomax Mall, Sector 2, Kharghar, Navi Mumbai, Maharashtra 410210, India",
    "Phone: 8571964292",
    "Email: (For Admission or Exam related) Admin@maritimemarvelsacademy.in",
    "(For Job Related) career@maritimemarvelsacademy.in",
    "info@maritimemarvelsacademy.in"
  ],
  "footerNote": "© Copyright 2024 | MMA | All Rights Reserved | Designed by Framemysite"
}

