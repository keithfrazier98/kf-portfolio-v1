import React from "react"
import Routes from "./Routes"
import Header from "./Header"

function Home() {
 return (
   <main className="container-fluid" style={{padding:"0"}}>
     <Header/>
     <Routes/>
   </main>
 )
}

export default Home