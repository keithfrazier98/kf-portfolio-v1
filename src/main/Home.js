import React from "react"
import Routes from "./Routes"
import Header from "./Header"
import Bio from "../content/Bio"
import Stack from "../content/Stack"

function Home() {
 return (
   <main className="container-fluid" style={{padding:"0"}}>
     <Header/>
     <Routes/>
     <Bio/>
     <Stack/>
   </main>
 )
}

export default Home