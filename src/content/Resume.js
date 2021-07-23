import React from "react"
import {Document} from 'react-pdf/dist/esm/entry.webpack'
import resume from "../images/keith-frazier-resume.pdf"
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


function Resume() {
    return (
        <Document file={resume}/>
    )
}

export default Resume