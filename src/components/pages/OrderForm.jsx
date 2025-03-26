import { React ,useState} from 'react'

const OrderForm = ({handleAdd}) => {
  const [OrderId, setOrderId] = useState("");
  const [Customer_id, setCustomer_id] = useState("");
  const [Status, setStatus] = useState("");
  const [Amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hi i am order form handlesubmit");
    const orders = { OrderId,Customer_id, Status ,Amount};
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
          <input type="text" className="form-control" id="recipient-name" value={OrderId} onChange={(e) => setOrderId(e.target.value)} />
        </div>x
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Customer_id</label>
          <input type="text" className="form-control" id="recipient-name" value={Customer_id} onChange={(e) => setCustomer_id(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">status</label>
          <input type="text" className="form-control" id="recipient-name" value={Status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">total_amount</label>
          <input type="text" className="form-control" id="recipient-name" value={Amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Add</button>
      </div>
    </form>
  )
}

export default OrderForm
