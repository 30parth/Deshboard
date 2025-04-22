import React from 'react'
import "./CSS/theme.min.css"    
import "./CSS/mapbox-gl.css"
import "./CSS/nouislider.min.css"
import "./CSS/flatpickr.min.css"
import "./CSS/dropzone.css" 
import "./JS/bootstrap.min.js"
import "./JS/all.min.js"
import SubSidebar from './SubSidebar.jsx'
import Info from './components/info/Info.jsx'
import Location from './components/location/Location.jsx'
import Amenities from './components/amenities/Amenities.jsx'
import Photos from './components/photos/Photos.jsx'
import Finance from './components/finance/Finance.jsx'
import Done from './components/done/Done.jsx'
import Policies from './components/policies/Policies.jsx'
const Tab1 = () => {
    return (
        <div className="content">
            <div className="mb-9">
                <h1 className="mb-4 mb-xl-5">Add New Property</h1>
                <div className="theme-wizard" data-theme-wizard="data-theme-wizard"
                    data-wizard-modal-disabled="data-wizard-modal-disabled">
                    <div className="row gx-0 gx-xl-5">
                        <SubSidebar/>
                        <div className="col-xl-8 flex-1">
                            <div className="row">
                                <div className="tab-content">
                                    <Info/>
                                    <Amenities/>
                                    <Location/>
                                    <Photos/>
                                    <Finance/>
                                    <Policies/>
                                    <Done/>
                                </div>
                                <div className="mt-6" data-wizard-footer="data-wizard-footer">
                                    <div className="d-none" data-wizard-prev-btn="data-wizard-prev-btn"></div><button
                                        className="btn btn-primary px-6 px-sm-11" type="submit"
                                        data-wizard-next-btn="data-wizard-next-btn">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab1
