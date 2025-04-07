import React from 'react'

const ModalView = ({modalTitle,ViewTable}) => {
    return (
        <>
            <div className="modal fade" id="ViewModel" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {ViewTable}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalView