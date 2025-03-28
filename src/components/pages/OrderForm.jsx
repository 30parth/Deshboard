import { React, useState , useEffect} from 'react'

const OrderForm = ({ handleAdd, order }) => {
  const [OrderId, setOrderId] = useState(order?.OrderId || '');
  const [Customer_id, setCustomer_id] = useState(order?.Customer_id || '');
  const [Status, setStatus] = useState(order?.Status || '');
  const [Amount, setAmount] = useState(order?.Amount || '');


  useEffect(() => {
    setAmount(order?.Amount || '');
    setCustomer_id(order?.Customer_id || '');
    setStatus(order?.Status || '');
    setOrderId(order?.OrderId || '');
  }, [order]);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hi i am order form handlesubmit");
    const orders = { OrderId, Customer_id, Status, Amount };
    handleAdd(orders);



    setAmount('');
    setCustomer_id('');
    setStatus('');
    setOrderId('');
    console.log(orders);

    // Close modal manually using Bootstrap method
    const modal = document.getElementById('exampleModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  };



  console.log("This is order");
  return (
    <form onSubmit={handleSubmit} >
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Order ID</label>
          <input type="text" className="form-control" id="recipient-name" value={OrderId} onChange={(e) => setOrderId(e.target.value)} disabled={order} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Customer_id</label>
          <input type="text" className="form-control" id="recipient-name" value={Customer_id} onChange={(e) => setCustomer_id(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">status</label>
          <input type="text" className="form-control" id="recipient-name" value={Status} onChange={(e) => setStatus(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">total_amount</label>
          <input type="text" className="form-control" id="recipient-name" value={Amount} onChange={(e) => setAmount(e.target.value)} required/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >{order ? "Edit" : "Add"}</button>
      </div>
    </form>
  )
}

export default OrderForm
