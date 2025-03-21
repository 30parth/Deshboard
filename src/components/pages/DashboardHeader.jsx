import {React , useEffect} from 'react'
import feather from 'feather-icons' 


const DashboardHeader = (props) => {
    useEffect(() => {
        // Initialize Feather Icons after rendering
        feather.replace();
        }, []); // Dependency array is empty to run this only on mount  
        return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{props.header}</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={alert(props.header+" is Called")}>Share</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    This week
                </button>
            </div>
        </div>
    )
}

export default DashboardHeader
