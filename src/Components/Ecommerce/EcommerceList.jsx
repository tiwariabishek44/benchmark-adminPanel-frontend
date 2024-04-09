// EcommerceList.jsx

import React from "react";
import './EcommerceList.css';
import { BookRepository } from "../../Respsitory/bookRespsitory";
import { Popconfirm } from "antd";

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const EcommerceList = () => {

  const bookRespository = new BookRepository();
  const [publication, setPublication] = React.useState([]);

  React.useEffect(()=>{
    bookRespository.getAllPublication().then(publicationBooks => {
      if(publicationBooks && publicationBooks?.data){
        setPublication(publicationBooks?.data)
      }
    });
  },[])
  
  const handleRemovePublication = (publicationId) => {
    bookRespository.deleteBook(publicationId).then(result=>{
      if(result && result.success){
        bookRespository.getAllPublication().then(response=>{
          if(response && response?.data){
            setPublication([...response?.data]);
          }
        })
      }
    })
  };

  return (
    <div className="ecommerce">
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
          {publication?.map((publication, index) => (
            <tr key={publication.id} className="ecommerce-format">
              <td>
                <img src={VITE_REACT_APP_BASE_URL + publication.fileLocation} alt="Publication" className="ecommerce-icon" />
              </td>
              <td>{publication.name}</td>
              <td>{publication.description}</td>
              <td>{publication.price}</td>
              <td>
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
