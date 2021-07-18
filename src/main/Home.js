import React from "react"
import Routes from "./Routes"
import Header from "./Header"
import Bio from "../content/Bio"

function Home() {
 return (
   <main className="container-fluid" style={{padding:"0"}}>
     <Header/>
     <Routes/>
     <Bio/>
   </main>
 )
}

export default Home