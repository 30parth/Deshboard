import React from 'react'
import ComponentHeader from '../layout/ComponentHeader'
import Table from './Table'
const Products = (props) => {
  return (
    <>
      <ComponentHeader header={"Products"} showButton={false}/>
      <Table tableName={"Products"}/>
    </>
  )
}

export default Products
