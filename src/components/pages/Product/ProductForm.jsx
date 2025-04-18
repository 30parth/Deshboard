import { React, useState, useEffect  } from 'react'



const ProductForm = ({ handleAdd, product, modalRef }) => {
  const [name, setName] = useState(product?.name || '');
  const [id, setId] = useState(product?.id || '');
  const [type, setType] = useState(product?.type || '');
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

    setName('');
    setId('');
    setType('');


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
  };

  const [validated, setValidated] = useState(false);

  // const [enableAdd, setEnableAdd] = useState(false);



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


  // const modalRef = useRef(null);
  return (
    <>
      <form onSubmit={onSubmit} className={`needs-validation ${validated ? "was-validated" : ""}`} noValidate>
      {/* <form onSubmit={handleSubmit} className="needs-validation" noValidate> */}
      {/* <form onSubmit={handleSubmit}> */}
        <div className="modal-body" >
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
          <button type="submit" className="btn btn-primary" >{product ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  )
}

export default ProductForm
