import React, { useState } from 'react';
import { FaList, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { IoHelpCircleSharp } from "react-icons/io5";

const DepartmentContainer = () => {
    const [selectedOption, setSelectedOption] = useState('DepartmentList');
    const [entries, setEntries] = useState(10);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleEntriesChange = (event) => {
        setEntries(event.target.value);
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
                    <span>Add Department</span>
                </div>
            </div>

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
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Anesthesiology</td>
                            <td>Anesthesiology</td>
                            <td>
                                <div className="department-options">
                                    <div className="department-option-icon help">
                                        <IoHelpCircleSharp />
                                    </div>
                                    <div className="department-option-icon delete">
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Bacteriological Laboratory</td>
                            <td>Bacteriological Laboratory</td>
                            <td>
                                <div className="department-options">
                                    <div className="department-option-icon help">
                                        <IoHelpCircleSharp />
                                    </div>
                                    <div className="department-option-icon delete">
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cardiology</td>
                            <td>Cardiology</td>
                            <td>
                                <div className="department-options">
                                    <div className="department-option-icon help">
                                        <IoHelpCircleSharp />
                                    </div>
                                    <div className="department-option-icon delete">
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dermatology</td>
                            <td>Dermatology</td>
                            <td>
                                <div className="department-options">
                                    <div className="department-option-icon help">
                                        <IoHelpCircleSharp />
                                    </div>
                                    <div className="department-option-icon delete">
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Emergency</td>
                            <td>Emergency</td>
                            <td>
                                <div className="department-options">
                                    <div className="department-option-icon help">
                                        <IoHelpCircleSharp />
                                    </div>
                                    <div className="department-option-icon delete">
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Gastroenterology</td>
                            <td>Gastroenterology</td>
                            <td>
                                <div className="department-options">
                                    <div className="department-option-icon help">
                                        <IoHelpCircleSharp />
                                    </div>
                                    <div className="department-option-icon delete">
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            {/* Add content for the selected option here */}
            {selectedOption === 'DepartmentList' ? (
                <div className="department-content">
                    {/* Content for Department List */}
                </div>
            ) : (
                <div className="department-content">
                    {/* Content for Add Department */}
                </div>
            )}
        </div>
    );
};

export default DepartmentContainer;
