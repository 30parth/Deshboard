import React from 'react'

const Location = () => {
  return (
    <>
      <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab2"
        id="add-property-wizard-tab2">
        <form id="addPropertyWizardForm2" noValidate="novalidate"
          data-wizard-form="2">
          <h3 className="mb-6">Location</h3>
          <div className="form-icon-container">
            <div className="form-floating"><input
              className="form-control form-icon-input" type="text"
              name="add-property-wizard-search-address"
              id="add-property-wizardwizard-search-address"
              placeholder="Search address..." /><label
                className="text-body-tertiary form-icon-label"
                htmlFor="add-property-wizardwizard-search-address">Search
                address...</label></div><span
                  className="fa-solid fa-location-dot text-body form-icon fs-10"></span><span
                    className="fa-solid fa-location-crosshairs position-absolute text-primary fs-9 end-0 top-0 mt-3 me-3"
                    data-fa-transform="down-2"></span>
          </div>
          <div
            className="mapbox-container rounded-3 border overflow-hidden mt-3 mb-6">
            <div id="mapbox"
              data-mapbox='{"attributionControl":false,"center":[-74.0020158,40.7228022],"zoom":14,"scrollZoom":false}'
              style={{ height: "250px" }}></div>
          </div>
          <div className="form-floating"><input className="form-control" type="text"
            name="add-property-wizard-street"
            id="add-property-wizardwizard-street"
            placeholder="Apartment / Street" /><label
              htmlFor="add-property-wizardwizard-street">Apartment /
              Street</label></div>
          <div className="row gx-3 my-3">
            <div className="col-md-6">
              <div className="form-floating mb-3 mb-md-0"><input
                className="form-control" type="text"
                name="add-property-wizard-city"
                id="add-property-wizardwizard-city"
                placeholder="City" /><label
                  htmlFor="add-property-wizardwizard-city">City</label></div>
            </div>
            <div className="col-md-6">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-state"
                id="add-property-wizardwizard-state"
                placeholder="State (Optional)" /><label
                  htmlFor="add-property-wizardwizard-state">State
                  (Optional)</label></div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-zip-code"
                id="add-property-wizardwizard-zip-code"
                placeholder="Zip Code" /><label
                  htmlFor="add-property-wizardwizard-zip-code">Zip
                  Code</label></div>
            </div>
            <div className="col-md-6">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-country"
                id="add-property-wizardwizard-country"
                placeholder="Country / Region" /><label
                  htmlFor="add-property-wizardwizard-country">Country /
                  Region</label></div>
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
