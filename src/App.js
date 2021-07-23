import React from "react";
import Header from "./main/Header";
import Routes from "./main/Routes";
import "./App.css";

function App() {
  return (
    <main className="container-fluid" style={{ padding: "0" }}>
      <Header/>
      <Routes />
    </main>
  );
}

export default App;
