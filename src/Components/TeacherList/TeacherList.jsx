import React, { useEffect, useState } from 'react'; // React library imports
import VerificationMessage from './verificationMessage/VerificationMeasage'; // Import the VerificationMessage component
import './TeacherList.css'; // CSS styles import
import TeacherRepository from '../../Respsitory/teacherRepositry'; // Teacher repository import

const TeacherList = () => { // TeacherList functional component
  const [filterOption, setFilterOption] = useState("verified"); // State for filter option
  const [verificationMessage, setVerificationMessage] = useState(""); // State for verification message
  const [verifiedTeachers, setverifiedTeachers] = useState([]); // State for verified teachers
  const [unverifiedTeacher, setunverifiedTeacher] = useState([]); // State for unverified teachers

  const teacherRepository = new TeacherRepository(); // Teacher repository instance creation

  useEffect(() => { // useEffect hook for fetching teacher data
    verifiedList(); // Fetch verified teachers
    unVerifiedList(); // Fetch unverified teachers
  }, []);

  const verifiedList = () => { // Function to fetch verified teachers
    teacherRepository.getVerifiedTeacher().then(data => {
      setverifiedTeachers(data?.data); // Set verified teachers in state
    });
  };

  const unVerifiedList = () => { // Function to fetch unverified teachers
    teacherRepository.getUnVerifiedTeacher().then(data => {
      setunverifiedTeacher(data?.data); // Set unverified teachers in state
    });
  };

  const handleVerifyTeacher = async (id) => { // Function to handle teacher verification
    const response = await teacherRepository.verifyTeacher(id); // Verify teacher
    console.log('Teacher verified:', response); // Log verification status
    setVerificationMessage(`${response.name} has been verified.`); // Set verification message
    window.location.reload(); // Reload the page
  };

  const filteredTeacherList = (filterOption === "verified") ? verifiedTeachers : unverifiedTeacher; // Determine filtered teacher list

  return (
    <div className="teacherListContainer"> {/* Teacher list container */}
      <h2 className="header">Teacher List</h2> {/* Header */}
      <div className="filterContainer"> {/* Filter container */}
        <label className="filterLabel">Filter by Verification Status:</label> {/* Filter label */}
        <select
          className="filterSelect"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          {/* <option value="all">All</option> */}
          <option value="verified">Verified</option> {/* Option for verified teachers */}
          <option value="unverified">Unverified</option> {/* Option for unverified teachers */}
        </select>
      </div>
      {verificationMessage && <VerificationMessage message={verificationMessage} className="verifyButton" />} {/* Display verification message */}
      <table className="teacherTable"> {/* Teacher table */}
        <thead> {/* Table header */}
          <tr> {/* Table row */}
            <th>Name</th> {/* Name column */}
            <th>Email</th> {/* Email column */}
            <th>Phone Number</th> {/* Phone number column */}
            <th>Verification Status</th> {/* Verification status column */}
            {filterOption === "unverified" && <th>Action</th>} {/* Action column for unverified teachers */}
          </tr>
        </thead>
        <tbody> {/* Table body */}
          {filteredTeacherList?.map((teacher, index) => (
            <tr key={index}> {/* Table row */}
              <td>{teacher.name}</td> {/* Name column */}
              <td>{teacher.email}</td> {/* Email column */}
              <td>{teacher.phoneNumber}</td> {/* Phone number column */}
              <td>{teacher.isVerified ? 'Verified' : 'Not Verified'}</td> {/* Verification status column */}
              {filterOption === "unverified" && (
                <td>
                  <button className="verifyButton" onClick={() => handleVerifyTeacher(teacher.id)}>Verify</button> {/* Verify button */}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList; // Export TeacherList component
