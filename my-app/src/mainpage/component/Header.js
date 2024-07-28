import React, { useState, useEffect, useRef } from 'react';
import { IoPersonSharp, IoSettingsSharp, IoHelpCircleSharp, IoLogOutSharp, IoNotificationsSharp } from "react-icons/io5";
import photo from '../../login/about.png';
import american from '../photos/american.png';
import palestine from '../photos/palestine.png';
import { MdOutlinePersonAddAlt } from "react-icons/md";

const HeaderMain = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [activeNotification, setActiveNotification] = useState(null); // State to track active notification
  const [activePersonal, setActivePersonal] = useState(false); // State to track active personal icon
  const dropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setActivePersonal(!activePersonal); // Toggle active personal icon
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownVisible(!notificationDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
      setActivePersonal(false); // Deactivate personal icon
    }
    if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
      setLanguageDropdownVisible(false);
    }
    if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
      setNotificationDropdownVisible(false);
    }
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    setLanguageDropdownVisible(false);
  };

  const handleNotificationClick = (notificationId) => {
    setActiveNotification(notificationId);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="headerMain">
      <h1 className="headerMain-title">Medical System</h1>
      <div className="headerMain-menu">
        <div className="headerMain-languageSelect" onClick={toggleLanguageDropdown}>
          <img
            src={currentLanguage === 'English' ? american : palestine}
            alt={currentLanguage}
            style={{ width: "20px", cursor: "pointer" }}
          />
        </div>
        {languageDropdownVisible && (
          <div className="dropdownMenuHeader" ref={languageDropdownRef}>
            <div className="dropdownItemHeader" onClick={() => changeLanguage('English')}>
              <img style={{ width: "20px" }} src={american} alt="English" className="dropdownIconHeader" />
              English
            </div>
            <div className="dropdownItemHeader" onClick={() => changeLanguage('Arabic')}>
              <img style={{ width: "20px" }} src={palestine} alt="Arabic" className="dropdownIconHeader" />
              Arabic
            </div>
            {/* Add more languages as needed */}
          </div>
        )}
        <div className="headerMain-notificationIcon" onClick={toggleNotificationDropdown}>
          <IoNotificationsSharp style={{ color: notificationDropdownVisible ? 'rgb(0, 200, 255)' : 'inherit' }} />
        </div>
        {notificationDropdownVisible && (
          <div className="dropdownMenuHeader notificationDropdown" ref={notificationDropdownRef}>
            <div className="dropdownHeaderHeader">
              <IoNotificationsSharp /> Notifications
            </div>
            <hr className="hrHeader" />
            <div
              className="notificationItem"
              onClick={() => handleNotificationClick('message')}
              style={{ color: activeNotification === 'message' ? 'blue' : 'inherit' }}
            >
              <IoPersonSharp className="notificationIcon" style={{ color: activeNotification === 'message' ? 'blue' : 'inherit' }} />
              <div className="notificationContent">
                <span className="notificationText">New message from John Doe</span>
                <span className="notificationTime">2 mins ago</span>
              </div>
            </div>
            <div
              className="notificationItem"
              onClick={() => handleNotificationClick('update')}
              style={{ color: activeNotification === 'update' ? 'blue' : 'inherit' }}
            >
              <IoSettingsSharp className="notificationIcon" style={{ color: activeNotification === 'update' ? 'blue' : 'inherit' }} />
              <div className="notificationContent">
                <span className="notificationText">System update available</span>
                <span className="notificationTime">10 mins ago</span>
              </div>
            </div>
            <div
              className="notificationItem"
              onClick={() => handleNotificationClick('maintenance')}
              style={{ color: activeNotification === 'maintenance' ? 'blue' : 'inherit' }}
            >
              <IoHelpCircleSharp className="notificationIcon" style={{ color: activeNotification === 'maintenance' ? 'blue' : 'inherit' }} />
              <div className="notificationContent">
                <span className="notificationText">Scheduled maintenance at 2:00 AM</span>
                <span className="notificationTime">1 hour ago</span>
              </div>
            </div>
          </div>
        )}
        <div className="headerMain-accountMenu" onClick={toggleDropdown}>
          <MdOutlinePersonAddAlt 
            className='iconforPersonalInformation'
            style={{ color: activePersonal ? 'rgb(0, 200, 255)' : 'white' }} 
          />
        </div>
        {dropdownVisible && (
          <div className="dropdownMenuHeader" ref={dropdownRef}>
            <div className="dropdownHeaderHeader">
              Medical Health Care
            </div>
            <hr className="hrHeader" />
            <div className="dropdownItemHeader">
              <IoPersonSharp className="dropdownIconHeader" />
              Edit Profile
              <span className="dropdownArrowHeader">{'>'}</span>
            </div>
            <div className="dropdownItemHeader">
              <IoSettingsSharp className="dropdownIconHeader" />
              Settings & Privacy
              <span className="dropdownArrowHeader">{'>'}</span>
            </div>
            <div className="dropdownItemHeader">
              <IoHelpCircleSharp className="dropdownIconHeader" />
              Help & Support
              <span className="dropdownArrowHeader">{'>'}</span>
            </div>
            <div className="dropdownItemHeader">
              <IoLogOutSharp className="dropdownIconHeader" />
              Logout
              <span className="dropdownArrowHeader">{'>'}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderMain;
