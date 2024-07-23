import React, { useState } from 'react';
import { FaDashboard, FaHospitalAlt, FaUserMd, FaUserInjured, FaUserNurse, FaPrescriptionBottleAlt, FaMicroscope, FaMoneyCheckAlt, FaUserShield, FaCog } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const Sidebar = ({ visible, toggleSidebar, onMenuItemClick }) => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        onMenuItemClick(item);
    };

    return (
        <aside className={`sidebar ${visible ? 'visible' : 'hidden'}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {visible ? '<' : '>'}
            </button>
            {visible && (
                <>
                    <h2 className="sidebar-title">HMS</h2>
                    <hr className="sidebar-divider" />
                </>
            )}
            <ul className="sidebar-menu">
                <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleMenuItemClick('Home')}>
                    <RxDashboard className={!visible ? 'icon-only' : ''} />
                    {visible && 'Home'}
                </li>
                <li className={activeItem === 'Department' ? 'active' : ''} onClick={() => handleMenuItemClick('Department')}>
                    <FaHospitalAlt className={!visible ? 'icon-only' : ''} />
                    {visible && 'Department'}
                </li>
                <li className={activeItem === 'Doctor' ? 'active' : ''} onClick={() => handleMenuItemClick('Doctor')}>
                    <FaUserMd className={!visible ? 'icon-only' : ''} />
                    {visible && 'Doctor'}
                </li>
                <li className={activeItem === 'Patient' ? 'active' : ''} onClick={() => handleMenuItemClick('Patient')}>
                    <FaUserInjured className={!visible ? 'icon-only' : ''} />
                    {visible && 'Patient'}
                </li>
                <li className={activeItem === 'Nurse' ? 'active' : ''} onClick={() => handleMenuItemClick('Nurse')}>
                    <FaUserNurse className={!visible ? 'icon-only' : ''} />
                    {visible && 'Nurse'}
                </li>
                <li className={activeItem === 'Pharmacist' ? 'active' : ''} onClick={() => handleMenuItemClick('Pharmacist')}>
                    <FaPrescriptionBottleAlt className={!visible ? 'icon-only' : ''} />
                    {visible && 'Pharmacist'}
                </li>
                <li className={activeItem === 'Laboratorist' ? 'active' : ''} onClick={() => handleMenuItemClick('Laboratorist')}>
                    <FaMicroscope className={!visible ? 'icon-only' : ''} />
                    {visible && 'Laboratorist'}
                </li>
                <li className={activeItem === 'Accountant' ? 'active' : ''} onClick={() => handleMenuItemClick('Accountant')}>
                    <FaMoneyCheckAlt className={!visible ? 'icon-only' : ''} />
                    {visible && 'Accountant'}
                </li>
                <li className={activeItem === 'Monitor Hospital' ? 'active' : ''} onClick={() => handleMenuItemClick('Monitor Hospital')}>
                    <FaUserShield className={!visible ? 'icon-only' : ''} />
                    {visible && 'Monitor Hospital'}
                </li>
                <li className={activeItem === 'Settings' ? 'active' : ''} onClick={() => handleMenuItemClick('Settings')}>
                    <FaCog className={!visible ? 'icon-only' : ''} />
                    {visible && 'Settings'}
                </li>
                {/* Add more menu items as needed */}
            </ul>
        </aside>
    );
};

export default Sidebar;
