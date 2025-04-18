import { React } from 'react'

const ModalComp = ({ modalTitle, component, modalRef }) => {
    return (
        <div className="modal" ref={modalRef} id="exampleModal" >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {/* {location.pathname==="/orders"?<OrderForm  handleAdd={handleAdd}/>:location.pathname==="/products"?<ProductForm handleAdd={handleAdd}/>:"Hiii"} */}

                    <div className="modal-body">
                        {component}
                    </div>
                </div>
            </div>
        </div>
    )
}                   

export default ModalComp