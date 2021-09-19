import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import "./UploadImage.css";

function UploadImage(){
    const filterBySize = (file) => {
        //filter out images larger than 5MB
        return file.size <= 5242880;
      };

    return (
        <div className="everything">
        <Uploady
            destination={{ url: "my-server.com/upload" }}
            fileFilter={filterBySize}
            accept="image/*"
        >
        <div className="preview">
        <UploadPreview/> 
        </div>
        <div>
            <UploadButton />
        </div>
        </Uploady>
        </div>
    )
}

export default UploadImage;