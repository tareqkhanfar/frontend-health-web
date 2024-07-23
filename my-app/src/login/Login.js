import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import image from './about.png'; // Make sure to add your default image in the src folder
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Add these icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showUsernameLabel, setShowUsernameLabel] = useState(false);
    const [showPasswordLabel, setShowPasswordLabel] = useState(false);
    const [country, setCountry] = useState('United States');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { t, i18n } = useTranslation();
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleFocus = (setLabelVisibility) => {
      setLabelVisibility(true);
    };
  
    const handleBlur = (setLabelVisibility, event) => {
      if (!event.target.value) {
        setLabelVisibility(false);
      }
    };
  
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };
  
    const handleLogin = () => {
      if (username === 'laith' && password === '12345') {
        toast.success('Login successful!');
      } else {
        toast.error('Username or password is incorrect.');
      }
    };

    const changeLanguage = (event) => {
      const language = event.target.value;
      i18n.changeLanguage(language);
    };
    
    return (
        <div className={`bodylogin ${i18n.language === 'ar' ? 'arabic' : ''}`}>
           <ToastContainer />
          <div className="dropdown-container">
            <select value={country} onClick={changeLanguage} onChange={handleCountryChange} className="dropdown">
              <option value="en">
                English
              </option>
              <option value="ar">
                Arabic
              </option>
            </select>
          </div>
          <div className="container1">
            <img src={image} alt="background" className="background-image" />
  
            <div className="container2">
              <div className="container3">
                <div className="linkslogin">
                  <Link to="#" className="linklogin active">{t('sign in')}</Link>
                </div>
                <div className="container4">
                  <label 
                    style={{ marginLeft: "10px", display: showUsernameLabel ? 'block' : 'none' }} 
                    className="label"
                  >
                   {t('user name')}
                  </label>
                  <input 
                  style={{marginTop:"20px"}}
                    type="text" 
                    placeholder={t('user name')}
                    className="input" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => handleFocus(setShowUsernameLabel)} 
                    onBlur={(e) => handleBlur(setShowUsernameLabel, e)} 
                  />
                  <label 
                    style={{ marginLeft: "10px", display: showPasswordLabel ? 'block' : 'none' }} 
                    className="label"
                  >
                   {t('password')}
                  </label>
                  <div className="password-container">
                    <input  style={{marginTop:"20px"}}
                      type={passwordVisible ? "text" : "password"} 
                      placeholder={t('password')}
                      className="input password-input" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => handleFocus(setShowPasswordLabel)} 
                      onBlur={(e) => handleBlur(setShowPasswordLabel, e)} 
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                      {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </span>
                  </div>
                  <button className="button" onClick={handleLogin}>{t('login')}</button>
                </div>
              </div>
              <div style={{ marginLeft: "180px",marginTop:"20px" }}>
                <a href="#" className="iconlogin "><FaInstagram style={{ color: "black", marginRight: "10px", fontSize: "20px" }} /></a>
                <a href="#" className="iconlogin "><FiFacebook style={{ color: "black", marginLeft: "20px", fontSize: "20px" }} /></a>
              </div>
              <div className="contact-info" style={{ marginTop: "100px" }}>
                <div className="iconlogin "><BsTelephone /> 0569158248</div>
                <div className="iconlogin "><MdOutlineMail /> islemeyyeh.lith@gmail.com</div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div>© 2024 Your Company. All rights reserved.</div>
          </footer>
        </div>
    );
  }
  
  export default Login;