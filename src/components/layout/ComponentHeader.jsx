import { React, useEffect } from 'react'
import feather from 'feather-icons'

const ComponentHeader = ({ header, showButton, handleExportJson, handleExportCsv, handleExportPdf }) => {
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
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary">
                                <span data-feather="download">
                                </span>
                                    Export 
                            </button>
                            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => { handleExportJson() }}>JSON</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => { handleExportPdf() }}>PDF</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => { handleExportCsv() }}>CSV</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ComponentHeader
