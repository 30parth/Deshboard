import {React,useState} from 'react'
import ComponentHeader from '../layout/ComponentHeader'
import Table from './Table'

const Order = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <ComponentHeader header={"Order"} showButton={true} />
      <Table data={products} />
    </>
  )
}

export default Order
