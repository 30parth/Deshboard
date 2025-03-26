import { React, useEffect, useState } from 'react'
import feather from 'feather-icons'


const ComponentHeader = ({ header, showButton, handleAddProduct, }) => {
    useEffect(() => {
        // Initialize Feather Icons after rendering
        feather.replace();
    }, []); // Dependency array is empty to run this only on mount  


    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{header}</h1>

                {showButton && (
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={(e) => alert(header + " is Called")}>Share</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ComponentHeader
