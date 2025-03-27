import { React, useState ,useEffect} from 'react'



const ProductForm = ({ handleAdd, product }) => {
  const [name, setName] = useState(product?.name || '');
  const [id, setId] = useState(product?.id || '');
  const [type, setType] = useState(product?.type || '');

  useEffect(() => {
    setName(product?.name || '');
    setId(product?.id || '');
    setType(product?.type || '');
  }, [product]);

  const handleSubmit = (e) => {
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
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Product ID</label>
            <input type="text" className="form-control" id="recipient-name" value={id} onChange={(e) => setId(e.target.value)} disabled={product}/>
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
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >{product ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  )
}

export default ProductForm
