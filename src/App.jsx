// import Navbar from "./components/Navbar"
import { useEffect } from "react"
import Card from "./components/card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  useEffect(() => {
    alert("hey welcome to my page")
  }, [])
  
  
  return (
    <>

      <Navbar/>
      <div className="cards">
      <Card title="Card Title" description="This is the description of the card." />
      <Card title="Another Card" description="Another description here." />
      <Card title="Another Card" description="Another description here." />
      <Card title="Another Card" description="Another description here." />
    
        
      </div>
      <Footer/>
    </>
  )
}

export default App
