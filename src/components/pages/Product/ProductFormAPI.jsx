import axios from 'axios';
import { React, useState, useEffect } from 'react'

const ProductFormAPI = ({ product, modalRef, productList }) => {
  const [title, setTitle] = useState(product?.title || '');
  const [id, setId] = useState(product?.id || '');
  const [type, setType] = useState(product?.type || '');
  const [idError, setIdError] = useState(false);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    setTitle(product?.title || '');
    setId(product?.id || '');
    setType(product?.type || '');
  }, [product]);

  const addToApi = (data) => {
    axios.post("https://fakestoreapi.com/products",data)
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
  }

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("Hi, I am ProductForm handleSubmit");
    if (productList.filter(f => f.id === id).length > 0) {
      setValidated(true);
      setIdError(true)
      console.log("id already exist")
      setId('');
    }
    else {
      console.log("id not exist")
      const updatedProduct = { title, id };
      addToApi(updatedProduct)
      setTitle('');
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
      setValidated(false)
      setIdError(false)
    }
  };

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
            <input
              type="text"
              className={`form-control ${idError ? "is-invalid" : ""}`}
              id="product-id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
                if (idError) setIdError(false);
              }}
              readOnly={!!product}
              required
            />
            <div className="invalid-feedback">
              {idError ? " Id already Exist " : "Please Enter the Product Id"}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product Title</label>
            <input type="text" className="form-control" id="recipient-name" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <div className="invalid-feedback">
              Please Enter the Product Name
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product price</label>
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

export default ProductFormAPI
