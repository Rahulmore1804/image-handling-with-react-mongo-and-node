import React, { useState, useEffect } from "react";
import "./output.css"
import { getSingleFiles } from "./api";
import Input from "./input";

function Output() {
  const [singleFiles, setSingleFiles] = useState([]);
  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileslist();
  }, []);
  return (
    <div className="ko">
      <Input getsingle={() => getSingleFileslist()} />
    
      <h1 className="k2">Uploaded Image List</h1>
      <div className="op">
      <div className="card">
      
        {" "}
        {singleFiles.map((file, index) => (
          <div className="col-6">
            <div >
              <img className = "ll"
                src={`http://localhost:3000/${file.filePath}`}
                height="200"
               
                alt="img"
              />
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
}
export default Output;
