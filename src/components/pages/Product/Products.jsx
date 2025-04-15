import { React, useState ,useRef } from 'react'
import ComponentHeader from '../../layout/ComponentHeader'
// import Table from './Table'
import ModalComp from '../../layout/ModalComp';
import ProductForm from './ProductForm';
import ModalView from '../../layout/ModalView';
import ViewProduct from './ViewProduct';
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable"; 
import html2canvas from 'html2canvas';
import exportFromJSON from 'export-from-json'

const Products = () => {

  const [products, setProducts] = useState([]);

  const [showPorduct, setShowPorduct] = useState([]);

  const [currentProduct, setCurrentProduct] = useState(null);

  const printData = useRef(null);

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
    const isConFirm = window.confirm('Are you sure you want to delete this');
    if (isConFirm) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      console.log("Product deleted:", id);
    }
  };

  const handleExportJson = () => {
    if(products.length !== 0)
    {
      console.log("this is data export")
      const fileData = JSON.stringify(products); // nicely formatted
      const blob = new Blob([fileData], { type: "application/json" });
      console.log(blob)
      const url = URL.createObjectURL(blob);
      console.log(url)
      const link = document.createElement("a");
      link.href = url;
      link.download = "Products.json";
      // document.body.appendChild(link);
      link.click();
      // document.body.removeChild(link);x  
    }
    else
    {
      alert("Insert some data First")
    }
  };

  const handleView = (view) => {
    console.log("View", view);
    setShowPorduct([view]);
    console.log("Show the data ", showPorduct);
    const modal = document.getElementById('ViewModel');
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }


  const handleExportPdf = () => {
    const doc = new jsPDF();
  
    // Define table headers
    const headers = [["Product ID", "Product Name", "Product Ordered"]];
  
    // Map your products to match the table structure
    const data = products.map(product => [
      product.id,
      product.name,
      product.type
    ]);
  
    // Generate table
    autoTable(doc,{
      head: headers,
      body: data,
      startY: 10,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] }, // Optional: Stylish header
    });
  
    // Save the PDF
    doc.save("Product.pdf");
  };


  const handleExportCsv = ()  =>{
    const fileName = "product";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({data : products, fileName, exportType })
  } 
  return (
    <>
      <ComponentHeader header={"Products"} showButton={true} handleExportJson={handleExportJson} handleExportPdf={handleExportPdf} handleExportCsv={handleExportCsv} />
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

      <ModalView modalTitle={"View The Prodcuts"} ViewTable={<ViewProduct ViewData={showPorduct} />} />
      
      <div className="table-responsive">
        <table ref={printData} className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Type</th>
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
                    <button type="button" className="btn btn-warning btn-sm" onClick={() => handleEdit(datas)}>Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(datas.id)}>Delete</button>
                    <button type="button" className="btn btn-info btn-sm" onClick={() => handleView(datas)}>View</button>
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