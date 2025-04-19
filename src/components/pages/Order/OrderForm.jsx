import { React, useState, useEffect } from 'react'

const OrderForm = ({ handleAdd, order, modalRef, orderList }) => {
  const [OrderId, setOrderId] = useState(order?.OrderId || '');
  const [Customer_id, setCustomer_id] = useState(order?.Customer_id || '');
  const [Status, setStatus] = useState(order?.Status || '');
  const [Amount, setAmount] = useState(order?.Amount || '');
  const [idError, setIdError] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setAmount(order?.Amount || '');
    setCustomer_id(order?.Customer_id || '');
    setStatus(order?.Status || '');
    setOrderId(order?.OrderId || '');
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hi i am order form handlesubmit");
    if(!order){
      if (orderList.filter(f => f.OrderId === OrderId).length > 0) {
        setValidated(true);
        setIdError(true)
        console.log("id already exist")
        setOrderId('');
      }
      else {
        const orders = { OrderId, Customer_id, Status, Amount };
        handleAdd(orders);
  
        setAmount('');
        setCustomer_id('');
        setStatus('');
        setOrderId('');
        console.log(orders);
        if (modalRef.current) {
          console.log(modalRef.current)
          const modalInstance = bootstrap.Modal.getInstance(modalRef.current);
          if (modalInstance) {
            modalInstance.hide();
          } else {
            console.warn("Modal instance not found for ref:", modalRef.current);
          }
        } else {
          console.error("modalRef.current is null or undefined");
        }
      }
    } else {
      const orders = { OrderId, Customer_id, Status, Amount };
        handleAdd(orders);
  
        setAmount('');
        setCustomer_id('');
        setStatus('');
        setOrderId('');
        console.log(orders);
        if (modalRef.current) {
          console.log(modalRef.current)
          const modalInstance = bootstrap.Modal.getInstance(modalRef.current);
          if (modalInstance) {
            modalInstance.hide();
          } else {
            console.warn("Modal instance not found for ref:", modalRef.current);
          }
        } else {
          console.error("modalRef.current is null or undefined");
        }
    }
  };

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    else {
      handleSubmit(event);
      setValidated(false)
    }
  };



  // console.log("This is order");
  return (
    <form onSubmit={onSubmit} className={`needs-validation ${validated ? "was-validated" : ""}`} noValidate >
      <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Order ID</label>
        <input type="text"
          className={`form-control ${idError ? "is-invalid" : ""}`}
          id="order-id"
          value={OrderId}
          onChange={(e) => {
            setOrderId(e.target.value);
            if (idError) setIdError(false);
          }}
          readOnly={!!order}
          required />
        <div className="invalid-feedback">
          {idError ? "id already Exist" : "Please Enter the Order Id"}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Customer_id</label>
        <input type="text" className="form-control" id="recipient-name" value={Customer_id} onChange={(e) => setCustomer_id(e.target.value)} required />
        <div className="invalid-feedback">
          Please Enter the customer Id
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">status</label>
        <input type="text" className="form-control" id="recipient-name" value={Status} onChange={(e) => setStatus(e.target.value)} required />
        <div className="invalid-feedback">
          Please Enter the status.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">total_amount</label>
        <input type="text" className="form-control" id="recipient-name" value={Amount} onChange={(e) => setAmount(e.target.value)} required />
        <div className="invalid-feedback">
          Please Enter the Amount.
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" >{order ? "Edit" : "Add"}</button>
      </div>
    </form>
  )
}

export default OrderForm