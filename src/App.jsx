import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid  from './components/ProductCard'

function App() {

  return (

    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid  />
    </div>

  )
}

export default App
