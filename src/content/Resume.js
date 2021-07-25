import React from 'react';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../images/keith-frazier-resume-word.pdf";

function Resume() {
  
  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  };

  return (
    <div className="row justify-content-center">
        <div className="col-6 d-flex justify-content-center ">
        <Document options={options} className="d-flex justify-content-center" file={resume}>
          <Page size= "A4" pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
