import { React, useEffect, useState } from 'react'
import feather from 'feather-icons'
import { Link, useLocation } from 'react-router-dom';

const ComponentHeader = ({ header, showButton, handleExportJson, handleExportCsv, handleExportPdf }) => {
    useEffect(() => {
        // Initialize Feather Icons after rendering
        feather.replace();
    }, []); // Dependency array is empty to run this only on mount  

    const location = useLocation();
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
                        {/* <button type="button" onClick={()=> {handleExport()}} className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="json"></span>
                            Export 
                            </button> */}
                        {/* <button className="btn btn-sm btn-outline-secondary"  onClick={ () => { handleExportCsv() } }>CSV</button> */}
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary">Export</button>
                            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => { handleExportJson() }}>JSON</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => { handleExportPdf() }}>PDF</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => { handleExportCsv() }}>CSV</a></li>
                            </ul>
                        </div>
                        {/* <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div> */}
                    </div>
                )}
            </div>
        </>
    )
}

export default ComponentHeader
