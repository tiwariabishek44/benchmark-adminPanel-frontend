import React, { useState } from "react";
import axios from "axios";
import "./AddMCQ.css";

import upload_area from "../../assets/upload_area.svg";
import pdfLogo from "../../assets/pdf.png";

const AddMCQ = () => {
  const [pdf, setPdf] = useState(null);
  const mcqDte = {
    name: "",
    pdf: "",
    stream: "science",
    class: "11",
    subject: "physics",
   
  };

  const [mcqDetail, setmcqDetail] = useState(mcqDte);

  const pdfHandler = (e) => {
    setPdf(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setmcqDetail({ ...mcqDetail, [e.target.name]: e.target.value });
  };



  return (
    <div className="add-mcq">
   

      {/* Stream */}
      <div className="addmcq-itemfield">
        <p>Stream</p>
        <select
          value={mcqDetail.stream}
          onChange={changeHandler}
          name="stream"
          className="add-mcq-selector"
        >
          <option value="science">Science</option>
          <option value="management">Management</option>
        </select>
      </div>

      {/* Class */}
      <div className="addmcq-itemfield">
        <p>Class</p>
        <select
          value={mcqDetail.class}
          onChange={changeHandler}
          name="class"
          className="add-mcq-selector"
        >
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      {/* Subject */}
      <div className="addmcq-itemfield">
        <p>Subjects</p>
        <select
          value={mcqDetail.subject}
          onChange={changeHandler}
          name="subject"
          className="add-mcq-selector"
        >
          {mcqDetail.stream==="science"?(<>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="computer">Computer</option>
          <option value="biology">Bio</option>
          <option value="math">Math</option>
          <option value="nepali">Nepali</option>
          </>):(<>
          <option value="english">English</option>
          <option value="accounting">Accounting</option>
          <option value="social-studies">Social studies</option>
          <option value="economic">Economic</option>
          <option value="business-studien">Business studies</option>
          <option value="momputer-science">Computer science</option>
          <option value="marketing">Marketing</option>
          </>)}
        </select>
      </div>

      
        <div className="addmcq-itemfield">
             {/* Name of product */}
      <div className="addmcq-itemfield">
        <p>MCQ name</p>
        <input
          value={mcqDetail.name}
          type="text"
          onChange={changeHandler}
          name="name"
          placeholder="Product name"
          required
        />
      </div>
          <label htmlFor="file-input">
            <img
              src={pdf ? pdfLogo : upload_area}
              alt=""
              style={{ width: "250px", marginTop: "20px" }}
              className="addmcq-thumnail-img"
            />
          </label>
          <input
            onChange={pdfHandler}
            type="file"
            name="pdf"
            id="file-input"
            accept="application/pdf"
            hidden
          />
        </div>
    



      {/* Add button */}
      <button>Add</button>
    </div>
  );
};

export default AddMCQ;
