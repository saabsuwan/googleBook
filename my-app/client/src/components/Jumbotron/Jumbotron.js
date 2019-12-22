import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div 
      style={{ height: 225, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center", margin: 20 }}
      className="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
