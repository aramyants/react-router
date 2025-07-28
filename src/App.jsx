import { Routes, Route } from 'react-router-dom'
import { About } from './components/About.jsx'
import { Home } from './components/Home.jsx'
import { Navbar } from './components/Navbar.jsx'
import { OrderSummary } from './components/OrderSummary.jsx'
import { NoMatch } from './components/NoMatch.jsx'
import { Products } from './components/Products.jsx'
import { FeaturedProducts } from './components/FeaturedProducts.jsx'
import { NewProducts } from './components/NewProducts.jsx'
import { SaleProducts } from './components/SaleProducts.jsx'
function App() {

  return (
    <>
      <Navbar />
      {/* Define routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="sale" element={<SaleProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
