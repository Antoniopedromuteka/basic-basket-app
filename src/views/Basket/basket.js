import React from 'react'
import { Top } from './components/Top'
import { Details } from './components/Details'

export const Basket = ({ topo, detalhes}) => {
  return (
    <>
      <Top {...topo}/>
      <Details {...detalhes}/>
    </>
  )
}
