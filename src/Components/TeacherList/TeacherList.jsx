import React, { useState } from 'react';
import VerificationMessage from './verificationMessage/VerificationMeasage'; // Import the VerificationMessage component
import './TeacherList.css';

const TeacherList = () => {
  const [filterOption, setFilterOption] = useState("verified");
  const [verificationMessage, setVerificationMessage] = useState("");

const teacherList = [
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Jane Doe",
    phoneNumber: "(555) 555-7777",
    email: "jane.doe@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. John Smith",
    phoneNumber: "(555) 555-8888",
    email: "john.smith@example.school.com",
    isVerified: false
  },
  {
    name: "Ms. Sarah Jones",
    phoneNumber: "(555) 555-9999",
    email: "sarah.jones@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. David Lee",
    phoneNumber: "(555) 555-0000",
    email: "david.lee@example.school.com",
    isVerified: true
  },
  {
    name: "Ms. Emily Brown",
    phoneNumber: "(555) 555-1111",
    email: "emily.brown@example.school.com",
    isVerified: false
  },
  {
    name: "Mr. William Johnson",
    phoneNumber: "(555) 555-2222",
    email: "william.johnson@example.school.com",
    isVerified: true
  },
  {
    name: "Ms. Alice Garcia",
    phoneNumber: "(555) 555-3333",
    email: "alice.garcia@example.school.com",
    isVerified: false
  },
  {
    name: "Mr. Michael Hernandez",
    phoneNumber: "(555) 555-4444",
    email: "michael.hernandez@example.school.com",
    isVerified: true
  },
  {
    name: "Ms. Christina Lopez",
    phoneNumber: "(555) 555-5555",
    email: "christina.lopez@example.school.com",
    isVerified: true
  },
  {
    name: "Mr. Robert Chen",
    phoneNumber: "(555) 555-6666",
    email: "robert.chen@example.school.com",
    isVerified: false
  }
];

  const handleVerifyTeacher = (index) => {
    const verifiedTeacher = teacherList[index];
    setVerificationMessage(`${verifiedTeacher.name} has been verified.`);
    setTimeout(() => {
      setVerificationMessage("");
    }, 3000);
  };

  const filteredTeacherList = teacherList.filter(teacher => {
    if (filterOption === "verified") {
      return teacher.isVerified;
    } else if (filterOption === "unverified") {
      return !teacher.isVerified;
    }
    return true;
  });

  return (
    <div className="teacherListContainer">
      <h2 className="header">Teacher List</h2>
      <div className="filterContainer">
        <label className="filterLabel">Filter by Verification Status:</label>
        <select
          className="filterSelect"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="verified">Verified</option>
          <option value="unverified">Unverified</option>
        </select>
      </div>
      {verificationMessage && <VerificationMessage message={verificationMessage} className="verifyButton" />}
      <div className="tableWrapper">
        <table className="teacherTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Verification Status</th>
              {filterOption === "unverified" && <th>Action</th>}
            </tr>
          </thead>
        </table>
        <div className="tableBodyWrapper">
          <table className="teacherTable">
            <tbody>
              {filteredTeacherList.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phoneNumber}</td>
                  <td>{teacher.isVerified ? 'Verified' : 'Not Verified'}</td>
                  {filterOption === "unverified" && (
                    <td>
                      <button className="verifyButton" onClick={() => handleVerifyTeacher(index)}>Verify</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TeacherList;
