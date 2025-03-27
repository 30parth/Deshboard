import { React, useState } from 'react'
import ComponentHeader from '../layout/ComponentHeader'
// import Table from './Table'
import ModalComp from '../layout/ModalComp';
import ProductForm from './ProductForm';
const Products = () => {

  const [products, setProducts] = useState([]);


  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    const modal = document.getElementById('exampleModal');
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  };

  const handleUpdateProduct = (updatedProduct) => { 
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setCurrentProduct(null);
    console.log("Product updated:", updatedProduct);
    // setProducts([...products, updatedProduct]);  
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    console.log("Product added:", product);
  };


  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    console.log("Product deleted:", id);
  };


  return (
    <>
      <ComponentHeader header={"Products"} showButton={true} />
      {/* <Table data={products} /> */}
      {/* <ModalComp modalTitle={"Add Products"} component={<ProductForm handleAdd={handleAddProduct} />} /> */}
      <ModalComp
        modalTitle={currentProduct ? "Edit Product" : "Add Products"}
        component={
          <ProductForm
            product={currentProduct}
            handleAdd={currentProduct ? handleUpdateProduct : handleAddProduct}
          />
        }
      />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Ordered</th>
              <th scope="col">Opration</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((datas, index) => (
                <tr key={index}>
                  <td>{datas.id}</td>
                  <td>{datas.name}</td>
                  <td>{datas.type}</td>
                  <td>
                    <button type="button" className="btn btn-warning btn-sm" data-bs-target="#exampleModal" onClick={() => handleEdit(datas)}>Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(datas.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products