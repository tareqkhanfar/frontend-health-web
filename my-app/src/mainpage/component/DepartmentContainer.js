import React, { useState } from 'react';
import { FaList, FaPlus, FaTrash, FaBars } from "react-icons/fa";

const DepartmentContainer = () => {
    const [selectedOption, setSelectedOption] = useState('DepartmentList');
    const [entries, setEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2; // assuming there are 2 pages, adjust according to your data
    const [showAddEditPopup, setShowAddEditPopup] = useState(false);
    const [showListPopup, setShowListPopup] = useState(false);
    const [popupData, setPopupData] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleEntriesChange = (event) => {
        setEntries(event.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleAddEditPopup = () => {
        setShowAddEditPopup(!showAddEditPopup);
    };

    const toggleListPopup = (rowData) => {
        setPopupData(rowData);
        setShowListPopup(!showListPopup);
    };

    return (
        <div className="department-container">
            <div className="department-top-bar">
                <div
                    className={`department-top-bar-option ${selectedOption === 'DepartmentList' ? 'department-selected' : ''}`}
                    onClick={() => handleOptionClick('DepartmentList')}
                >
                    <FaList className="department-icon" />
                    <span>Department List</span>
                </div>
                <div
                    className={`department-top-bar-option ${selectedOption === 'AddDepartment' ? 'department-selected' : ''}`}
                    onClick={() => handleOptionClick('AddDepartment')}
                >
                    <FaPlus className="department-icon" />
                    <span>ADD-EDIT Department</span>
                </div>
            </div>

            {selectedOption === 'DepartmentList' && (
                <>
                    <div className="department-sub-bar">
                        <div className="department-search">
                            <label htmlFor="search">Search:</label>
                            <input type="text" id="search" />
                        </div>
                        <div className="department-show-entries">
                            <label htmlFor="entries">Show</label>
                            <select id="entries" value={entries} onChange={handleEntriesChange}>
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span>entries</span>
                        </div>
                    </div>

                    <div className="table-container">
                        <table className="department-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Department Name</th>
                                    <th>Description</th>
                                    <th>Head of department</th>
                                    <th>Phone</th>
                                    <th>Department Code</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr onClick={() => toggleListPopup({ id: 1, name: "Anesthesiology", description: "Anesthesiology", head: "laith", phone: "0569158248", code: "12345" })}>
                                    <td>1</td>
                                    <td>Anesthesiology</td>
                                    <td>Anesthesiology</td>
                                    <td>laith</td>
                                    <td>0569158248</td>
                                    <td>12345</td>
                                    <td  onClick={(e) => e.stopPropagation()}>
                                        <div className="department-options" >
                                            <div className="department-option-icon delete">
                                                <FaTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                               

                            </tbody>
                        </table>
                    </div>

                    <div className="pagination-container">
                        <div className="pagination-info">
                            Show {currentPage * entries - entries + 1} to {Math.min(currentPage * entries, 13)} of 13 entries
                        </div>
                        <div className="pagination-buttons">
                            <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
                            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                            {
                                [...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </button>
                                ))
                            }
                            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                            <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
                        </div>
                    </div>
                </>
            )}

            {selectedOption === 'AddDepartment' && (
                <div className="add-edit-department">
                    <div className="department-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <div className="input-with-icon">
                                    <input type="text" id="name" placeholder="Name" />
                                    <FaBars className="icon-right" onClick={toggleAddEditPopup} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" placeholder="Location" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="headOfDepartment">Head of Department</label>
                                <input type="text" id="headOfDepartment" placeholder="Head of Department" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="numberOfStaff">Number of Staff</label>
                                <input type="number" id="numberOfStaff" placeholder="Number of Staff" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input type="text" id="contactNumber" placeholder="Contact Number" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="servicesOffered">Services Offered</label>
                                <input type="text" id="servicesOffered" placeholder="Services Offered" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="annualBudget">Annual Budget</label>
                                <input type="number" id="annualBudget" placeholder="Annual Budget" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="operatingHours">Operating Hours</label>
                                <input type="text" id="operatingHours" placeholder="Operating Hours" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="floorNumber">Floor Number</label>
                                <input type="number" id="floorNumber" placeholder="Floor Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="faxNumber">Fax Number</label>
                                <input type="text" id="faxNumber" placeholder="Fax Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input type="text" id="website" placeholder="Website" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="departmentCode">Department Code</label>
                                <input type="text" id="departmentCode" placeholder="Department Code" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emergencyContact">Emergency Contact</label>
                                <input type="text" id="emergencyContact" placeholder="Emergency Contact" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasLaboratory">Has Laboratory</label>
                                <select id="hasLaboratory">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="hasPharmacy">Has Pharmacy</label>
                                <select id="hasPharmacy">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasRadiology">Has Radiology</label>
                                <select id="hasRadiology">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="medicalImage">Has Medical Image</label>
                                <select id="medicalImage">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasEmergencyServices">Has Emergency Services</label>
                                <select id="hasEmergencyServices">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasPhysicalTherapy">Has Physical Therapy</label>
                                <select id="hasPhysicalTherapy">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="hasSurgeryRooms">Has Surgery Rooms</label>
                                <select id="hasSurgeryRooms">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasPatientRooms">Has Patient Rooms</label>
                                <select id="hasPatientRooms">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasDentalServices">Has Dental Services</label>
                                <select id="hasDentalServices">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasAmbulanceService">Has Ambulance Service</label>
                                <select id="hasAmbulanceService">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hasMaternityWard">Has Maternity Ward</label>
                                <select id="hasMaternityWard">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-divider"></div> {/* Divider line */}
                    <div className="form-buttons">
                        <button className="btn save">SAVE</button>
                        <button className="btn clear">CLEAR</button>
                        <button className="btn delete">DELETE</button>
                        <button className="btn print">PRINT</button>
                    </div>
                </div>
            )}

            {showAddEditPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-header">
                            <h2>Search on department</h2>
                            <button className="close-button" onClick={toggleAddEditPopup}>×</button>
                        </div>
                        <div className="popup-content">
                            <div className="popup-form-row">
                                <div style={{ flexDirection: "row", display: "flex", padding: "10px" }}>
                                    <label style={{ fontWeight: "bold", marginRight: "20px" }}>Department Name </label>
                                    <input type='text' placeholder='Department name' style={{ border: "1px solid #ccc", borderRadius: "2px", height: "25px", width: "250px" }}></input>
                                </div>
                            </div>
                            <div className="popup-form-row">
                                <div style={{ flexDirection: "row", display: "flex", padding: "10px" }}>
                                    <label style={{ fontWeight: "bold", marginRight: "20px" }}>Department Code </label>
                                    <input type='text' placeholder='Department code' style={{ border: "1px solid #ccc", borderRadius: "2px", height: "25px", width: "250px" }}></input>
                                </div>
                            </div>
                            <div className="popup-form-buttons">
                                <button className="btn search">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showListPopup && (
                <div  className="popup-overlay">
                    <div  className="popup1">
                        <div className="popup-header">
                            <h2>Department Details</h2>
                            <button className="close-button" onClick={() => setShowListPopup(false)}>×</button>
                        </div>
                        <div className="popup-content">

                            <div style={{flexDirection:"column",display:"flex"}}>
                               <div style={{flexDirection:"row",display:"flex",padding:"10px"}}>
                                
                               </div>

                            </div>
                            
                            <div className="form-row">
                    <div className="form-group">
                        <label >Name</label>
                        <label className="input-label">Name</label>
                    </div>
                    <div className="form-group">
                        <label >Location</label>
                        <label className="input-label" id="location">Location</label>
                    </div>
                    <div className="form-group">
                        <label >Head of Department</label>
                        <label className="input-label" id="headOfDepartment">Head of Department</label>
                    </div>
                    <div className="form-group">
                        <label>Number of Staff</label>
                        <label className="input-label" id="numberOfStaff">Number of Staff</label>
                    </div>
                    <div className="form-group">
                        <label >Contact Number</label>
                        <label className="input-label" id="contactNumber">Contact Number</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label >Name</label>
                        <label className="input-label" id="name">Name</label>
                    </div>
                    <div className="form-group">
                        <label >Location</label>
                        <label className="input-label" id="location">Location</label>
                    </div>
                    <div className="form-group">
                        <label >Head of Department</label>
                        <label className="input-label" id="headOfDepartment">Head of Department</label>
                    </div>
                    <div className="form-group">
                        <label >Number of Staff</label>
                        <label className="input-label" id="numberOfStaff">Number of Staff</label>
                    </div>
                    <div className="form-group">
                        <label >Contact Number</label>
                        <label className="input-label" id="contactNumber">Contact Number</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label >Name</label>
                        <label className="input-label" id="name">Name</label>
                    </div>
                    <div className="form-group">
                        <label >Location</label>
                        <label className="input-label" id="location">Location</label>
                    </div>
                    <div className="form-group">
                        <label >Head of Department</label>
                        <label className="input-label" id="headOfDepartment">Head of Department</label>
                    </div>
                    <div className="form-group">
                        <label >Number of Staff</label>
                        <label className="input-label" id="numberOfStaff">Number of Staff</label>
                    </div>
                    <div className="form-group">
                        <label >Contact Number</label>
                        <label className="input-label" id="contactNumber">Contact Number</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <label className="input-label" id="name">Name</label>
                    </div>
                    <div className="form-group">
                        <label >Location</label>
                        <label className="input-label" id="location">Location</label>
                    </div>
                    <div className="form-group">
                        <label >Head of Department</label>
                        <label className="input-label" id="headOfDepartment">Head of Department</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor>Number of Staff</label>
                        <label className="input-label" id="numberOfStaff">Number of Staff</label>
                    </div>
                    <div className="form-group">
                        <label >Contact Number</label>
                        <label className="input-label" id="contactNumber">Contact Number</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <label className="input-label" id="name">Name</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <label className="input-label" id="location">Location</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="headOfDepartment">Head of Department</label>
                        <label className="input-label" id="headOfDepartment">Head of Department</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberOfStaff">Number of Staff</label>
                        <label className="input-label" id="numberOfStaff">Number of Staff</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <label className="input-label" id="contactNumber">Contact Number</label>
                    </div>
                </div>


                          <button className='btnhoverforpop' >update</button>


                          
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default DepartmentContainer;
