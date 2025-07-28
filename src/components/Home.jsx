import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/order-summary')
  }
  return (
    <>
    <div>Home Page</div>
    <button onClick={() => handleClick()}>Go to Order Summary</button>
  </>
  )
}
