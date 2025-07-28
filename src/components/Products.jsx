import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="/products/new">New Arrivals</Link>
        <Link to="sale">Sale</Link>
      </nav>
      <Outlet />
    </>
  );
};
