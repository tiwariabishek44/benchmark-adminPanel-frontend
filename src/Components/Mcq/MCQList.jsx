import React from "react";
import './MCQLts.css';
import { BookRepository } from "../../Respsitory/bookRespsitory";
import { Popconfirm } from "antd";
import { consoleLog } from "../../utils/helpers";

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const MCQlist = () => {

  const mcqRespository = new BookRepository();
 
  const [mcq, setMcq] = React.useState([]);

  React.useEffect(()=>{
    const fetchMCQs = async () => {
      try {
        const mcqBooks = await mcqRespository.getAllMcq();
        if (mcqBooks && mcqBooks.data) {
          setMcq(mcqBooks.data);
        }
      } catch (error) {
        consoleLog("Error fetching MCQs:", error);
      }
    };
    
    fetchMCQs();
  }, [])
  

  const handleRemoveNote = (noteId) => {
    mcqRespository.deleteBook(noteId).then(result=>{
      if(result && result.success){
        mcqRespository.getAllMcq().then(response=>{
          if(response && response?.data){
            setMcq([...response?.data]);
          }
        })
      }
    });
  };

  return (
    <div className="mcqlist">
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Description</th>
            <th>View</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {mcq.map((note, index) => (
            <tr key={note.fileLocation}>
              <td>{index + 1}</td>
              <td>{note.name}</td>
              <td>{note.description}</td>
              <td>
              <button className="button-container">
      <a
        href={VITE_REACT_APP_BASE_URL + note.fileLocation}
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration:'none',color:'white'}}
        className="button-link" // Apply the button-link class to the <a> element
      >
        Open 
      </a>
    </button>
              {/* <a href={VITE_REACT_APP_BASE_URL + note.fileLocation} target="_blank" rel="noopener noreferrer" className="open-file-link">Open File</a> */}
              </td>
              <td>
                <Popconfirm
                  title="Delete the MCQ"
                  description="Are you sure to delete this MCQ?"
                  onConfirm={() => handleRemoveNote(note.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="rmv-button">Remove</button>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MCQlist;
