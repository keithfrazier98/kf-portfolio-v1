import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactsDiv" id="contact">
      <div className="row justify-content-center">
        <div className="col-5 contactsH3Div">
          <h3 style={{  paddingLeft: "25px"}}>Check my links or reach out via email!</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5">
          <ul className="list-group list-group-horizontal list-group-flush contactsUl">
            <li className="list-group-item">
              <a
                target="_blank"
                className="btn btn-outline-secondary"
                href="https://github.com/keithfrazier98"
              >
                GitHub
              </a>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                className="btn btn-outline-secondary"
                href="https://www.linkedin.com/in/keith-frazier/"
              >
                LinkedIn
              </a>
            </li>
            <li className="list-group-item">
              <div>
                <CopyToClipboard text="keithfrazier98@gmail.com">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      alert("Copied!");
                    }}
                  >
                    keithfrazier98@gmail.com
                  </button>
                </CopyToClipboard>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
