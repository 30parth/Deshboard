import React from 'react'

const Info = () => {
  return (
    <>
      <div className="tab-pane active" role="tabpanel"
        aria-labelledby="add-property-wizard-tab1" id="add-property-wizard-tab1">
        <form id="addPropertyWizardForm1" data-wizard-form="1">
          <h3 className="mb-4">Basic information</h3>
          <h4 className="mb-4">Property Information</h4>
          <div className="form-floating"><input className="form-control" type="text"
            name="add-property-wizard-name"
            id="add-property-wizardwizard-name" placeholder="Property Name"/><label
              htmlFor="add-property-wizardwizard-name">Property Name</label>
            <h5 className="text-end text-body-quaternary fw-semibold mt-2"><span
              className="text-primary">15 </span>/ 60</h5>
          </div>
          <div className="form-floating my-3"><textarea className="form-control"
            placeholder="Description" name="add-property-wizard-message"
            id="add-property-wizard-wizard-des"
            style={{ height: "162px" }}></textarea><label
              htmlFor="add-property-wizard-wizard-des">DESCRIPTION</label>
            <h5 className="text-end text-body-quaternary fw-semibold mt-2"><span
              className="text-primary">0 </span>/ 360</h5>
          </div>
          <div className="row g-3">
            <div className="col-md-8 col-lg-12 col-xl-8">
              <div className="form-floating"><select  className="form-select"
                name="add-property-wizard-type"
                id="add-property-wizardproperty-type">
                <option value="1">Hotel</option>
                <option value="1">Flight</option>
                <option value="2">Trip</option>
              </select><label
                htmlFor="add-property-wizardproperty-type">Property
                  Type</label></div>
            </div>
            <div className="col-md-4 col-lg-12 col-xl-4">
              <div className="form-icon-container">
                <div className="form-floating"><select
                  className="form-select form-icon-input"
                  name="add-property-wizard-type"
                  id="add-property-wizardrating-type">
                  <option value="5">5 star</option>
                  <option value="4">4 star</option>
                  <option value="3">3 star</option>
                  <option value="2">2 star</option>
                  <option value="1">1 star</option>
                </select><label
                  className="text-body-tertiary form-icon-label"
                  htmlFor="add-property-wizardrating-type">Rating</label>
                </div><span
                  className="fa-solid fa-star text-warning form-icon fs-10"></span>
              </div>
            </div>
          </div>
          <h4 className="mt-6 mb-3">Contact Information</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating"><input
                className="form-control input-spin-none" type="email"
                name="add-property-wizard-email"
                id="add-property-wizardwizard-email"
                placeholder="Email Address" /><label
                  htmlFor="add-property-wizardwizard-email">Email
                  Address</label></div>
            </div>
            <div className="col-md-6">
              <div className="form-floating"><input
                className="form-control input-spin-none" type="number"
                name="add-property-wizard-phone"
                id="add-property-wizardwizard-phone"
                placeholder="Phone number" /><label
                  htmlFor="add-property-wizardwizard-phone">Phone
                  number</label></div>
            </div>
          </div>
          <h4 className="mt-6 mb-3">Is it part of a hotel / property chain?</h4>
          <div className="row align-items-center g-3">
            <div className="col-sm-auto">
              <div className="form-check form-check-inline me-4 me-sm-7 mb-0">
                <input className="form-check-input" id="no1" type="radio"
                  name="CheckIsHotelRadio" /><label className="form-check-label"
                    htmlFor="no1">No</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input
                className="form-check-input" id="yes1" type="radio"
                name="CheckIsHotelRadio"  /><label
                  className="form-check-label" htmlFor="yes1">Yes</label></div>
            </div>
            <div className="col-sm-auto flex-1">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-company"
                id="add-property-wizardwizard-company"
                placeholder="Name of Company, Group or Chain"
                value="With help text" disabled="disabled" /><label
                  htmlFor="add-property-wizardwizard-company">Name of Company,
                  Group or Chain</label></div>
            </div>
          </div>
          <h4 className="mt-6 mb-3">Do you use a Channel Management Systems?</h4>
          <div className="row align-items-center g-3">
            <div className="col-sm-auto">
              <div className="form-check form-check-inline me-4 me-sm-7 mb-0">
                <input className="form-check-input" id="no2" type="radio"
                  name="CheckUseRadio" /><label
                    className="form-check-label" htmlFor="no2">No</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input
                className="form-check-input" id="yes2" type="radio"
                name="CheckUseRadio"/><label className="form-check-label"
                  htmlFor="yes2">Yes</label></div>
            </div>
            <div className="col-sm-auto flex-1">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-cms"
                id="add-property-wizardwizard-cms"
                placeholder="CMS Provider name"  /><label
                  htmlFor="add-property-wizardwizard-cms">CMS Provider
                  name</label>
                <span
                  className="fa-solid fa-search position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
                  data-fa-transform="down-2"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Info
