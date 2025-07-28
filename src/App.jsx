import { Route, Routes } from 'react-router-dom';
import { About } from './components/About.jsx';
import { Admin } from './components/Admin.jsx';
import { FeaturedProducts } from './components/FeaturedProducts.jsx';
import { Home } from './components/Home.jsx';
import { Navbar } from './components/Navbar.jsx';
import { NewProducts } from './components/NewProducts.jsx';
import { NoMatch } from './components/NoMatch.jsx';
import { OrderSummary } from './components/OrderSummary.jsx';
import { Products } from './components/Products.jsx';
import { SaleProducts } from './components/SaleProducts.jsx';
import { UserDetails } from './components/UserDetails.jsx';
import { Users } from './components/Users.jsx';
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
          <Route index element={<FeaturedProducts />} />
          {/* Nested routes for products */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="sale" element={<SaleProducts />} />
        </Route>

        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
