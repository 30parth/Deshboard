import React from 'react'
import ComponentHeader from '../layout/ComponentHeader'
import Table from './Table'

const Order = () => {
  return (
    <>
      <ComponentHeader header={"Order"} showButton={false}/>
      <Table tableName={"Order"}/>
    </>
  )
}

export default Order
