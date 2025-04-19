import { React, useState, useRef, useEffect } from 'react'
import ComponentHeader from '../../layout/ComponentHeader'
import ModalComp from '../../layout/ModalComp';
import OrderForm from './OrderForm'
import ViewOrder from './ViewOrder';
import ModalView from '../../layout/ModalView';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import html2canvas from 'html2canvas';
import exportFromJSON from 'export-from-json'
import { useSelector } from 'react-redux';


const Order = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [ShowOnView, setShowOnView] = useState([]);

  const input = useSelector(state => state.input.value);

  const modalRef = useRef(null);

  console.log("this is selector is uesed", input);

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

  const handleView = (view) => {
    console.log("View", view);
    setShowOnView([view]);
    console.log("Show the data ", ShowOnView);
    const modal = document.getElementById('ViewModel');
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }

  const handleDelete = (id) => {
    const isConFirm = window.confirm('Are you sure you want to delete this');
    if (isConFirm) {
      const updatedOrders = orders.filter((order) => order.OrderId !== id);
      setOrders(updatedOrders);
      console.log("Order deleted:", id);
    }
  };

  const handleExportCsv = () => {
    if(orders.length!==0) {
      const fileName = "order";
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data: orders, fileName, exportType })
    }  else {
      alert("Insert some data First")
    }
  }

  const handleExportJson = () => {
    if (orders.length !== 0) {
      console.log("this is data export")
      const fileData = JSON.stringify(orders); // nicely formatted
      const blob = new Blob([fileData], { type: "application/json" });
      console.log(blob)
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Orders.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    else {
      alert("Insert first");
    }
  };

  const printData = useRef(null);

  const handleExportPdf = async () => {

    if(orders.length!==0) {
      const element = printData.current;
      const canvas = await html2canvas(element, { scale: 2, });
      const data = canvas.toDataURL('image/png');


      const doc = new jsPDF({
        format: "a4",
      });
      const imgPro = doc.getImageProperties(data);
      const width = doc.internal.pageSize.getHeight();
      const hight = (imgPro.height * width) / imgPro.width;
      doc.addImage(data, 'PNG', 0, 0, width, hight);
      doc.save("Order.pdf");
    } else {
      alert("Insert some data First")
    }
  }


  const filteredData = orders.filter((order) =>
    Object.values(order).some((val) =>
      val.toLowerCase().includes(input.toLowerCase())
    )
  );


  return (
    <>
      <ComponentHeader header={"Orders"} showButton={true} handleExportJson={handleExportJson} handleExportPdf={handleExportPdf} handleExportCsv={handleExportCsv} />

      {/* <Table data={orders} /> */}
      {/* <ModalComp modalTitle={"Add Order"} handleAdd={handleAddOrders} component={<OrderForm  handleAdd={handleAddOrders}/>} /> */}
      <ModalComp
        modalRef={modalRef}
        modalTitle={currentOrder ? "Edit Order" : "Add Orders"}
        component={
          <OrderForm
            modalRef={modalRef}
            order={currentOrder}
            handleAdd={currentOrder ? handleUpdateOrder : handleAddOrders}
            orderList={orders}
          />
        }
      />
      <ModalView modalTitle={"View The Order"} ViewTable={<ViewOrder ViewData={ShowOnView} />} />
      <div className="table-responsive">
        <table ref={printData} className="table table-striped table-sm">
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
            {filteredData.length > 0 ? (
              filteredData.map((datas, index) => (
                <tr key={index}>
                  <td>{datas.OrderId}</td>
                  <td>{datas.Customer_id}</td>
                  <td>{datas.Status}</td>
                  <td>{datas.Amount}</td>
                  <td>
                    <button type="button" className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(datas)} >Edit</button>
                    <button type="button" className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(datas.OrderId)}>Delete</button>
                    <button type="button" className="btn btn-info btn-sm mx-1" onClick={() => handleView(datas)} >View</button>
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