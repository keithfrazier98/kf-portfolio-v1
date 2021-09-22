import React from "react"
import Bio from "../content/Bio"
import Stack from "../content/Stack"
import Projects from "../content/Projects"
import Contact from "../content/Contact"
import Puzzle from "../content/Puzzle"

function Home() {
 return (
   <div>
     <Bio/>
     <Stack/>
     <Projects/>
     <Contact/>
   </div>
     
 )
}

export default Home