import { React, useState } from 'react'
import ComponentHeader from '../layout/ComponentHeader'
// import Table from './Table'
import ModalComp from '../layout/ModalComp';
import ProductForm from './ProductForm';
const Products = () => {

  const [products, setProducts] = useState([]);


  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    console.log("Product added:", product);
  };





  console.log(products);
  return (
    <>
      <ComponentHeader header={"Products"} showButton={true} />
      {/* <Table data={products} /> */}
      <ModalComp modalTitle={"Add Products"} handleAdd={handleAddProduct}  component={<ProductForm  handleAdd={handleAddProduct}/>} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Id</th>
              <th scope="col">Product Ordered</th>
              <th scope="col">Opration</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((datas, index) => (
                <tr key={index}>
                  <td>{datas.name}</td>
                  <td>{datas.id}</td>
                  <td>{datas.type}</td>
                  <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products