// import Navbar from "./components/Navbar"

import Card from "./components/card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>

      <Navbar/>
      <div className="cards">
      <Card title="Card Title" description="This is the description of the card." />
      <Card title="Another Card" description="Another description here." />
        <Card/>
        <Card/>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
