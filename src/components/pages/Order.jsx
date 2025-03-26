import { React, useState } from 'react'
import ComponentHeader from '../layout/ComponentHeader'
// import Table from './Table'
import ModalComp from '../layout/ModalComp';
import OrderForm from './OrderForm';

const Order = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrders = (order) => {
    setOrders([...orders, order]);
    console.log("Product added:", order);
  };




  return (
    <>
      <ComponentHeader header={"Order"} showButton={true} />
      {/* <Table data={orders} /> */}
      <ModalComp modalTitle={"Add Order"} handleAdd={handleAddOrders} component={<OrderForm  handleAdd={handleAddOrders}/>} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Customer Id</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Opration</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((datas, index) => (
                <tr key={index}>
                  <td>{datas.OrderId}</td>
                  <td>{datas.Customer_id}</td>
                  <td>{datas.Status}</td>
                  <td>{datas.Amount}</td>
                  <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Order