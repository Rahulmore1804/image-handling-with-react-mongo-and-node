import { useState } from "react";
import "../App.css";
import axios from "axios";
function Input(props) {
  const [singlefile, setsinglefile] = useState("");
  function singlefilechange(e) {
    setsinglefile(e.target.files[0]);
    
  }

  function senddet() {
    const formData = new FormData();
    formData.append("file", singlefile);
    axios
      .post("http://localhost:3000/api/singleFile/", formData)
      .then((res) => {
        
        props.getsingle();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <input className="ff" type="file" onChange={(e) => singlefilechange(e)} />
      <button className="jj" onClick={senddet}>send</button>

    
    </div>
  );
}

export default Input;
