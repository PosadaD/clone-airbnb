import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CartData from "./data"

function App() {
  const Cards = CartData.map(data => {
    return( 
      <Card 
        key={data.id}
        item={data}
      />
    )
  })
  
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="containerCarts">
        {Cards}
      </div>
    </div>  
  );
}

export default App;
