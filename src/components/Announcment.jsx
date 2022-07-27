import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white; 
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

`

export default function Announcment() {
  return (
    <Container>
      Super Deal! Free 50 day shipping on orders over $500,000
      </Container>
  )
}
