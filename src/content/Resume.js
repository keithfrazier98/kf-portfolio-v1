/*
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
        <div className="col-6 d-flex justify-content-center">
        <Document options={options} className="d-flex justify-content-center" file={resume}>
          <Page size= "A4" pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
*/

import React, { PureComponent } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import throttle from "lodash.throttle";
import pdf from "../images/keith-frazier-resume-word.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: null };
    this.throttledSetDivSize = throttle(this.setDivSize, 500);
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener("resize", this.throttledSetDivSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledSetDivSize);
  }

  setDivSize = () => {
    this.setState({ width: this.pdfWrapper.getBoundingClientRect().width });
  };

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div id="row" className="wrapperSizing">
            <div
              id="pdfWrapper"
              style={{ width: "90vw" }}
              ref={(ref) => (this.pdfWrapper = ref)}
            >
              <PdfComponent wrapperDivSize={this.state.width} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PdfComponent extends PureComponent {
  render() {
    return (
      <div>
        <a href="../images/keith-frazier-resume-word.pdf" download="resume">
          Download
        </a>
        <Document file={pdf}>
          <Page pageNumber={1} width={this.props.wrapperDivSize} />
        </Document>
      </div>
    );
  }
}

export default App;
