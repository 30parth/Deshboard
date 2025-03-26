import { React, useState } from 'react'
import ComponentHeader from '../layout/ComponentHeader'
// import Table from './Table'
import ModalComp from '../layout/ModalComp';
import OrderForm from './OrderForm';

const Order = () => {
  const [orders, setOrders] = useState([]);
  

    const [currentOrder, setCurrentOrder] = useState(null);
  
    const handleEdit = (order) => {
      setCurrentOrder(order);
      const modal = document.getElementById('exampleModal');
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    };
  
    const handleUpdateOrder = (updatedOrder) => { 
      const updatedOrders = orders.map((order) =>
        order.OrderId === updatedOrder.OrderId ? updatedOrder : order
      );
      setOrders(updatedOrders);
      setCurrentOrder(null);
      console.log("Order updated:", updatedOrder);  
    };

  const handleAddOrders = (order) => {
    setOrders([...orders, order]);
    console.log("Product added:", order);
  };

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.OrderId !== id);
    setOrders(updatedOrders);
    console.log("Order deleted:", id);
  };



  return (
    <>
      <ComponentHeader header={"Order"} showButton={true} />
      {/* <Table data={orders} /> */}
      {/* <ModalComp modalTitle={"Add Order"} handleAdd={handleAddOrders} component={<OrderForm  handleAdd={handleAddOrders}/>} /> */}
      <ModalComp
        modalTitle={currentOrder ? "Edit Order" : "Add Orders"}
        component={
          <OrderForm
            order={currentOrder}
            handleAdd={currentOrder ? handleUpdateOrder : handleAddOrders}
          />
        }
      />
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
                    <button type="button" className="btn btn-warning btn-sm" onClick={() => handleEdit(datas)} >Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(datas.OrderId)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Orders available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Order