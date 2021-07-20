import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./Contact.css";
function Contact() {
  return (
    <div className = "contactsDiv">
      <div className="row justify-content-center ">
        <h3>Check my links or reack out via email!</h3>
      </div>
      <div className="row justify-content-center">
        <ul className="list-group list-group-horizontal contactsUl">
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
              <CopyToClipboard text="keithers98@gmail.com">
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
  );
}

export default Contact;
