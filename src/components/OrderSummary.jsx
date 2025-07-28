import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <>
    <div>Order Confirmed!</div>
    <button onClick={() => handleClick()}>Go to Home</button>
  </>
  )
}
