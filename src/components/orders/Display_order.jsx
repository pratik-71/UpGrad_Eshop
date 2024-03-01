import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Display_order = () => {
  const product = useSelector((state)=>state.products.buy_product)
  return (
    <>
      <Container>
           
          <p>{product.quantity}</p>

      </Container>
    </>
  )
}

export default Display_order
