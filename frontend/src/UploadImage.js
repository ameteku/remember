import React from "react";
import api_key from "./api_key";
import "./UploadImage.css";
const imgbbUploader = require("imgbb-uploader");

function UploadImage(){
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [imageEvent,changeEvent]=React.useState("");
    const [basestring,changeBase64]=React.useState("");
    function uploadBase64(e) {
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            changeBase64(reader.result)
        }
        console.log(basestring.slice(22));
        const options = {
        apiKey: api_key,
        base64string:basestring.slice(22)}
        imgbbUploader(options).then((response) => console.log(response)).catch((error) => console.error(error));
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      }
  return (

    // Upload from stack overflow: https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js
    <div>
      <h1>Upload your Image</h1>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        <button onClick={()=>{
            uploadBase64(imageEvent);

            }}>Submit</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(api_key);
          setSelectedImage(event.target.files[0]);
          changeEvent(event);
        }}
      />
    </div>
  );
};

export default UploadImage;