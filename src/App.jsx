import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin } from './components/Admin.jsx';
import { FeaturedProducts } from './components/FeaturedProducts.jsx';
import { Home } from './components/Home.jsx';
import { Navbar } from './components/Navbar.jsx';
import { NewProducts } from './components/NewProducts.jsx';
import { NoMatch } from './components/NoMatch.jsx';
import { OrderSummary } from './components/OrderSummary.jsx';
import { Products } from './components/Products.jsx';
import { Profile } from './components/Profile.jsx';
import { SaleProducts } from './components/SaleProducts.jsx';
import { UserDetails } from './components/UserDetails.jsx';
import { Users } from './components/Users.jsx';
import { AuthProvider } from './components/auth.jsx';
import Login from './components/Login.jsx';
import { RequireAuth } from './components/RequireAuth.jsx';
// import { About } from './components/About.jsx';
const LazyAbout = React.lazy(() => import('./components/About.jsx'));
function App() {
  return (
    <AuthProvider>
      {/* Wrap the application in AuthProvider to provide authentication context */}
      <>
        <Navbar />
        {/* Define routes for the application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            {/* Nested routes for products */}
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
            <Route path="sale" element={<SaleProducts />} />
          </Route>

          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="login" element={<Login />} />
          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
