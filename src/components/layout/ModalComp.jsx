import React from 'react'
import { useLocation } from 'react-router-dom'
import OrderForm from '../pages/Order/OrderForm'
import ProductForm from '../pages/Product/ProductForm'

const ModalComp = ({modalTitle, component}) => {
    let location = useLocation()
    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {/* {location.pathname==="/orders"?<OrderForm  handleAdd={handleAdd}/>:location.pathname==="/products"?<ProductForm handleAdd={handleAdd}/>:"Hiii"} */}
                    {component}
                </div>
            </div>
        </div>
    )
}

export default ModalComp
