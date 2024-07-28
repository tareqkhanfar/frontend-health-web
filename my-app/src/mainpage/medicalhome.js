import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import TopBar from './component/TopBar';
import HeaderMain from './component/Header';
import DashboardContainer from './component/DashboardContainer'; 
import DepartmentContainer from './component/DepartmentContainer'; // Create this component
import DoctorContainer from './component/DoctorContainer';

const MedicalHome = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedMenuItem, setSelectedMenuItem] = useState('Home');

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleMenuItemClick = (item) => {
        setSelectedMenuItem(item);
    };

    return (
        <div className="app">
            <HeaderMain />
            <div className="main-layout">
                <Sidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} onMenuItemClick={handleMenuItemClick} />
                <div className={`content ${sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
                    <TopBar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} selectedMenuItem={selectedMenuItem} />
                    {selectedMenuItem === 'Home' && <DashboardContainer />}
                    {selectedMenuItem === 'Department' && <DepartmentContainer />}
                    {selectedMenuItem==='Doctor'&&<DoctorContainer/>}
                </div>
            </div>
        </div>
    );
};

export default MedicalHome;
