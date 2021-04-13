import React,{useEffect, useRef, useState} from 'react';
import sampleData from "../../data/sample-data.json";

export const UploadData = ({setProfileData, setDisplayResume}) => {

    const downloadLinkRef = useRef(null);
    const [files, setFiles] = useState("");

    useEffect(()=> {
      downloadSampleData();
    }, []);

    const downloadSampleData = async () => {
      const fileName = "file";
      const json =  JSON.stringify(sampleData, null, 2);
      const blob = new Blob([json],{type:'application/json'});
      const href = await URL.createObjectURL(blob);
      downloadLinkRef.current.href = href;
      downloadLinkRef.current.download = `${fileName}.json`;
    }

    const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        // console.log("e.target.result", e.target.result);
        setFiles(e.target.result);
      };
    };

    const generateResume = () => {
      if(!isValidJSON(files)) {
        alert("Please upload valid JSON")
        return
      }
      setProfileData(JSON.parse(files));
      setDisplayResume(true);
      
    }

    const isValidJSON = (jsonString) => {
      if(typeof jsonString !== "string") {
        return false;
      }
      try{
        JSON.parse(jsonString);
        return true;
      }
      catch(err){
        return false
      }
    }

    return (
        <div className="container">
          <a href="../../data/sample-data.js" target="_blank" ref={downloadLinkRef}>Download sample data</a>
          <input type="file" onChange={handleChange}/>
          <button type="button" onClick={()=> generateResume() }>Get your Resume</button>
        </div>
    )
}
