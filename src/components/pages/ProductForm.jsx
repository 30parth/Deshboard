import { React, useState, useEffect } from 'react'



const ProductForm = ({ handleAdd, product }) => {
  const [name, setName] = useState(product?.name || '');
  const [id, setId] = useState(product?.id || '');
  const [type, setType] = useState(product?.type || '');
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    setName(product?.name || '');
    setId(product?.id || '');
    setType(product?.type || '');
  }, [product]);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("Hi, I am ProductForm handleSubmit");
    const updatedProduct = { name, id, type };
    handleAdd(updatedProduct);

    // Clear form fields after submission
    setName('');
    setId('');
    setType('');

    // Close modal manually using Bootstrap
    const modal = document.getElementById('exampleModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      handleSubmit(event) ;
    }
    setValidated(true);
  };

  return (
    <>
      <form onSubmit={onSubmit} className={`needs-validation ${validated ? "was-validated" : ""}`} noValidate>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product ID</label>
            <input type="text" className="form-control" id="recipient-name" value={id} onChange={(e) => setId(e.target.value)} disabled={product} required />
            <div className="invalid-feedback">
              Please Enter the Product Id
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product Name</label>
            <input type="text" className="form-control" id="recipient-name" value={name} onChange={(e) => setName(e.target.value)} required />
            <div className="invalid-feedback">
              Please Enter the Product Name
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product Acive</label>
            <input type="text" className="form-control" id="recipient-name" value={type} onChange={(e) => setType(e.target.value)} required />
            <div className="invalid-feedback">
              Please Enter the Product State
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >{product ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  )
}

export default ProductForm
