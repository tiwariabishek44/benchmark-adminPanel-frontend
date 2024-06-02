import React from "react"; // Import React
import './MCQLts.css'; // Import CSS file for styling
import { BookRepository } from "../../Respsitory/bookRespsitory"; // Import BookRepository from repository
import { Popconfirm } from "antd"; // Import Popconfirm component from Ant Design
import { consoleLog } from "../../utils/helpers"; // Import consoleLog utility function

// Retrieve base URL from environment variables
const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

// Functional component for displaying MCQ list
const MCQlist = () => {
  // Create an instance of BookRepository
  const mcqRespository = new BookRepository();
 
  // State to store list of MCQs
  const [mcq, setMcq] = React.useState([]);

  // Effect to fetch MCQs when the component mounts
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

  // Function to handle removal of MCQ
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

  const openFile = ( fileLocation) =>{
      
    mcqRespository.downloadBook(fileLocation).then(fileData =>{
      if(fileData==null){
        return; 
      }
      const href = URL.createObjectURL(fileData);
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', fileLocation.substring(fileLocation.lastIndexOf("/")+1));
      link.setAttribute('target','_blank');
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(href);
    })
}

  return (
    <div className="mcqlist"> {/* Container for MCQ list */}
      <table>
        <thead>
          <tr>
            <th>S.N</th> {/* Serial number column */}
            <th>Name</th> {/* Name column */}
            <th>Description</th> {/* Description column */}
            <th>View</th> {/* View button column */}
            <th>Remove</th> {/* Remove button column */}
          </tr>
        </thead>
        <tbody>
          {mcq.map((note, index) => ( 
            <tr key={note.fileLocation}>
              <td>{index + 1}</td> {/* Display serial number */}
              <td>{note.name}</td> {/* Display MCQ name */}
              <td>{note.description}</td> {/* Display MCQ description */}
              <td>
                {/* Button to view MCQ */}
                <button className="button-container" onClick={()=>{openFile(note.fileLocation)}}>
                  
                    Open 
                 
                </button>
              </td>
              <td>
                {/* Confirmation popover for removing MCQ */}
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

export default MCQlist; // Export MCQlist component
