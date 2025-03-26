import { React, useState } from 'react'
import ComponentHeader from '../layout/ComponentHeader'
import Table from './Table'
const Products = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hi i am handlesubmit");
    const product = { name, id, type };
    handleAddProduct(product);
    setName('');
    setId('');
    setType('');




    // Close modal manually using Bootstrap method
    const modal = document.getElementById('exampleModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  };

  const [products, setProducts] = useState([]);


  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    console.log("Product added:", product);
  };



  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');


  console.log(products);
  return (
    <>
      <ComponentHeader header={"Products"} showButton={true}  handleAddProduct={props.handleAddProduct} products={props.products} />
      <Table data={products} />
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Products