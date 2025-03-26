import { React, useState } from 'react'

const ProductForm = ({handleAdd}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hi i am product form handlesubmit");
    const product = { name, id, type };
    handleAdd(product);
    setName('');
    setId('');
    setType('');




    // Close modal manually using Bootstrap method
    const modal = document.getElementById('exampleModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  };


  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  console.log("This is order");
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product ID</label>
            <input type="text" className="form-control" id="recipient-name" value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product Name</label>
            <input type="text" className="form-control" id="recipient-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product Acive</label>
            <input type="text" className="form-control" id="recipient-name" value={type} onChange={(e) => setType(e.target.value)} />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Add</button>
        </div>
      </form>
    </>
  )
}

export default ProductForm
