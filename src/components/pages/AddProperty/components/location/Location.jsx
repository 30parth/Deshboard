import React from 'react'
import InputText from '../../layout/FromElement/InputText'

const Location = () => {
  return (
    <>
      <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab2"
        id="add-property-wizard-tab2">
        <form id="addPropertyWizardForm2" noValidate="novalidate"
          data-wizard-form="2">
          <h3 className="mb-6">Location</h3>
          <div className="form-icon-container">
              <InputText labelName={"Search address..."} type={"text"}/>
            <span className="fa-solid fa-location-crosshairs position-absolute text-primary fs-9 end-0 top-0 mt-3 me-3"data-fa-transform="down-2"></span>
          </div>
          <div className="mapbox-container rounded-3 border overflow-hidden mt-3 mb-6">
            <div id="mapbox" data-mapbox='{"attributionControl":false,"center":[-74.0020158,40.7228022],"zoom":14,"scrollZoom":false}' style={{ height: "250px" }}>
            </div>
          </div>
          <InputText labelName={"Apartment/Street"} type={"text"}/>
          <div className="row gx-3 my-3">
            <div className="col-md-6">
              <div className="mb-3 mb-md-0">
                <InputText labelName={"City"} type={"text"}/>
              </div>
            </div>
            <div className="col-md-6">
              <InputText labelName={"State (Optional)"} type={"text"}/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <InputText labelName={"Zip Code"} type={"number"}/>
            </div>
            <div className="col-md-6">
              <InputText labelName={"Country / Region"} type={"text"}/>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mt-6">
            <h4>Show your specific location</h4>
            <div className="form-check form-switch"><input className="form-check-input"
              id="locationSwitchCheckChecked" type="checkbox"/></div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Location
