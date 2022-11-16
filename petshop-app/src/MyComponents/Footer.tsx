import { Box } from "@mui/material";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import "./footerStyle.css";

export const Footer = () => {
  return (
    <Box sx={{ paddingTop: 1 }}>
      <div className="footer">
        <div>
          <div className="footer-content">
            <h3
              style={{
                fontFamily: "Trebuchet MS",
                fontSize: "2em"
              }}
            >
              Pet Store
            </h3>
            <p>Pet Store is a registered company under Abc Tech Pvt. Ltd.</p>
            <div className="sub">
              <div>
                <b>Company</b>
                <p>About</p>
                <p>Blog</p>
              </div>
              <div>
                <b>For Pet Lovers</b>
                <p>Code of conduct</p>
                <p>Community</p>
              </div>
              <div>
                <b>For Pet Owners</b>
                <p>Food</p>
                <p>Accessories</p>
              </div>
              <div>
                <b>For You</b>
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
              </div>
              <div>
                <b>Social links</b>
                <div>
                  <AiFillFacebook />
                  <AiFillTwitterCircle />
                  <AiFillInstagram />
                </div>
                <div>
                  <AiFillApple />
                  <FaGooglePlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};


