import React from 'react';

const TopBar = ({ sidebarVisible, toggleSidebar, selectedMenuItem }) => {
    const getTitle = () => {
        switch (selectedMenuItem) {
            case 'Department':
                return 'Manage Department';
            case 'Home':
            default:
                return 'Admin Dashboard';
        }
    };

    return (
        <div className={`topbar ${sidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
            <span className="topbar-title">{getTitle()}</span>
            <div className="topbar-right">
                <div className="role">
                    <span>Doctor</span>
                    <span className="role-number">123</span>
                </div>
                <span className="separator">|</span>
                <div className="role">
                    <span>Patient</span>
                    <span className="role-number">456</span>
                </div>
                <span className="separator">|</span>
                <div className="role">
                    <span>Nurse</span>
                    <span className="role-number">78</span>
                </div>
                <span className="separator">|</span>
                <div className="role">
                    <span>Pharmacist</span>
                    <span className="role-number">90</span>
                </div>
                <span className="separator">|</span>
                <div className="role">
                    <span>Laboratorist</span>
                    <span className="role-number">12</span>
                </div>
                <span className="separator">|</span>
                <div className="role">
                    <span>Accountant</span>
                    <span className="role-number">34</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
