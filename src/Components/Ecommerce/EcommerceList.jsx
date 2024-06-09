import React from "react";
import './EcommerceList.css';  // Import CSS file
import { BookRepository } from "../../Respsitory/bookRespsitory";  // Import BookRepository
import { Popconfirm } from "antd";  // Import Popconfirm component

let VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const EcommerceList = () => {
  const bookRepository = new BookRepository();  // Initialize BookRepository
  const [publication, setPublication] = React.useState([]);  // State to hold publication data

  React.useEffect(() => {
    // Fetch all publications on component mount
    bookRepository.getAllPublication().then(publicationBooks => {
      if (publicationBooks && publicationBooks?.data) {
        setPublication(publicationBooks?.data);  // Set fetched publications to state
      }
    });
  }, []);
  
  const handleRemovePublication = (publicationId) => {
    // Function to remove publication by ID
    bookRepository.deleteBook(publicationId).then(result => {
      if (result && result.success) {
        // If deletion is successful, fetch updated publication list
        bookRepository.getAllPublication().then(response => {
          if (response && response?.data) {
            setPublication([...response?.data]);  // Update publication list in state
          }
        });
      }
    });
  };



  return (
    <div className="ecommerce">
      {/* Render publication data in a table */}
      <table>
        <thead>
          <tr className="ecommerce-format-main">
            <th>S.N</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through publication array and render each publication */}
          {publication?.map((publication, index) => (
            <tr key={publication.id} className="ecommerce-format">
              <td>
                {/* Display publication image */}
                <img src={(VITE_REACT_APP_BASE_URL=="/"?"":VITE_REACT_APP_BASE_URL) + publication.fileLocation} alt="Publication" className="ecommerce-icon" />
              </td>
              <td>{publication.name}</td>
              <td>{publication.description}</td>
              <td>{publication.price}</td>
              <td>
                {/* Confirm deletion on button click */}
                <Popconfirm
                  title="Delete the publication"
                  description="Are you sure to delete this item?"
                  onConfirm={() => handleRemovePublication(publication.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="removeButton">Remove</button>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EcommerceList;
